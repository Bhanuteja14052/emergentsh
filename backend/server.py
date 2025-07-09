from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="pending")

class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: Optional[str] = None

# Email service functions
async def send_contact_email(contact_data: ContactMessageCreate):
    """Send contact form email using SendGrid"""
    try:
        sendgrid_api_key = os.environ.get('SENDGRID_API_KEY')
        sender_email = os.environ.get('SENDER_EMAIL', 'bhanutejagummadevelli@gmail.com')
        
        if not sendgrid_api_key:
            logging.warning("SendGrid API key not found, skipping email send")
            return False
        
        sg = SendGridAPIClient(sendgrid_api_key)
        
        html_content = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {contact_data.name}</p>
            <p><strong>Email:</strong> {contact_data.email}</p>
            <p><strong>Subject:</strong> {contact_data.subject}</p>
            <div style="border: 1px solid #ccc; padding: 15px; margin: 10px 0;">
                <h3>Message:</h3>
                <p>{contact_data.message}</p>
            </div>
            <p><em>This message was sent from your portfolio website contact form.</em></p>
        </body>
        </html>
        """
        
        message = Mail(
            from_email=sender_email,
            to_emails=sender_email,
            subject=f"Portfolio Contact: {contact_data.subject}",
            html_content=html_content
        )
        
        response = sg.send(message)
        return response.status_code == 202
        
    except Exception as e:
        logging.error(f"Failed to send email: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Bhanu Teja Portfolio API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact_data: ContactMessageCreate, background_tasks: BackgroundTasks):
    """Submit contact form and send email"""
    try:
        # Create contact message object
        contact_message = ContactMessage(**contact_data.dict())
        
        # Save to database
        await db.contact_messages.insert_one(contact_message.dict())
        
        # Send email in background
        background_tasks.add_task(send_contact_email, contact_data)
        
        return ContactResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon.",
            id=contact_message.id
        )
        
    except Exception as e:
        logging.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    try:
        messages = await db.contact_messages.find().sort("timestamp", -1).to_list(1000)
        return [ContactMessage(**message) for message in messages]
    except Exception as e:
        logging.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact messages")

@api_router.get("/contact/{message_id}", response_model=ContactMessage)
async def get_contact_message(message_id: str):
    """Get a specific contact message"""
    try:
        message = await db.contact_messages.find_one({"id": message_id})
        if not message:
            raise HTTPException(status_code=404, detail="Message not found")
        return ContactMessage(**message)
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error fetching contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact message")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
