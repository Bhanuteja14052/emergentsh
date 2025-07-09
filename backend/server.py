from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
from typing import Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Bhanu Teja Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactResponse(BaseModel):
    id: str
    message: str
    timestamp: datetime

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Bhanu Teja Portfolio API", "version": "1.0.0"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactMessage):
    """Submit a contact form message"""
    # In a real application, you would save this to a database or send an email
    # For now, we'll just return a success response
    response_id = str(uuid.uuid4())
    
    # Log the contact message (in production, you'd save to database or send email)
    logger.info(f"Contact form submission - ID: {response_id}, Name: {contact.name}, Email: {contact.email}")
    
    return ContactResponse(
        id=response_id,
        message="Thank you for your message! I'll get back to you soon.",
        timestamp=datetime.utcnow()
    )

@api_router.get("/resume")
async def download_resume():
    """Download resume PDF"""
    resume_path = ROOT_DIR / "resume.pdf"
    if resume_path.exists():
        return FileResponse(
            path=resume_path,
            filename="Gummadavelli_Bhanu_Teja_Resume.pdf",
            media_type='application/pdf'
        )
    else:
        raise HTTPException(status_code=404, detail="Resume not found")

@api_router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "timestamp": datetime.utcnow()}

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
