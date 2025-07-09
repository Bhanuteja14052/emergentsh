# 🚀 Bhanu Teja Portfolio - World-Class Personal Portfolio

A modern, responsive, and feature-rich personal portfolio website built with React, FastAPI, and MongoDB. This portfolio showcases AI/ML projects, full-stack development skills, and professional experience with a futuristic Apple-inspired design.

## ✨ Features

- **Modern Design**: Apple-inspired futuristic design with glassmorphism effects
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Contact Form**: Functional contact form with email integration
- **Resume Download**: Direct PDF download functionality
- **SEO Optimized**: Clean URLs and meta tags
- **Fast Performance**: Optimized bundle size and loading times

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **SendGrid** - Email service integration
- **Pydantic** - Data validation

### Development
- **Yarn** - Package manager
- **Craco** - Create React App configuration
- **ESLint** - Code linting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
portfolio/
├── frontend/                  # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── resume.pdf        # Resume download file
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── ui/          # UI components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Layout.js
│   │   ├── contexts/        # React contexts
│   │   │   └── ThemeContext.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── Blog.js
│   │   │   └── Contact.js
│   │   ├── hooks/           # Custom hooks
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── .env
├── backend/                   # FastAPI backend
│   ├── server.py             # Main server file
│   ├── requirements.txt
│   └── .env
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- MongoDB (local or cloud instance)
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   ```

3. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Environment Variables**

   **Frontend (.env):**
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```

   **Backend (.env):**
   ```env
   MONGO_URL="mongodb://localhost:27017"
   DB_NAME="portfolio"
   SENDGRID_API_KEY="your_sendgrid_api_key_here"
   SENDER_EMAIL="bhanutejagummadevelli@gmail.com"
   ```

5. **Start the Development Servers**

   **Backend (Terminal 1):**
   ```bash
   cd backend
   python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   yarn start
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001
   - API Documentation: http://localhost:8001/docs

## 📧 Email Configuration

To enable the contact form email functionality:

1. **Sign up for SendGrid**:
   - Visit [SendGrid](https://sendgrid.com)
   - Create an account and verify your email
   - Complete domain authentication (optional but recommended)

2. **Get API Key**:
   - Go to Settings → API Keys
   - Create a new API key with "Full Access" permissions
   - Copy the API key

3. **Update Backend Environment**:
   ```env
   SENDGRID_API_KEY="your_actual_sendgrid_api_key"
   SENDER_EMAIL="your_verified_email@domain.com"
   ```

4. **Restart the Backend Server**:
   ```bash
   cd backend
   python -m uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

## 🎨 Customization

### Updating Personal Information

1. **Profile Information**: Update the personal details in each page component
2. **Resume**: Replace `/public/resume.pdf` with your actual resume
3. **Project Data**: Modify the project arrays in `Projects.js`
4. **Social Links**: Update social media links in `Footer.js` and `Contact.js`

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Update font settings in `index.css`
- **Animations**: Customize animations in `App.css`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `App.js`
3. Update navigation in `Header.js`

## 🔧 Development

### Available Scripts

**Frontend:**
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests

**Backend:**
- `python -m uvicorn server:app --reload` - Start development server
- `python -m uvicorn server:app --host 0.0.0.0 --port 8001` - Start production server

### Code Quality

- **ESLint**: Configured for React best practices
- **Prettier**: Code formatting (optional)
- **TypeScript**: Can be added for type safety

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

## 🌟 Performance Features

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Optimized bundle sizes
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression for better loading times

## 🔒 Security

- **CORS**: Properly configured for cross-origin requests
- **Input Validation**: Server-side validation with Pydantic
- **Environment Variables**: Sensitive data stored securely
- **Rate Limiting**: Can be added for API protection

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**:
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy**:
   - Upload the `build` folder to your hosting provider
   - Update environment variables in hosting dashboard

### Backend Deployment (Heroku/Railway)

1. **Prepare for deployment**:
   ```bash
   cd backend
   pip freeze > requirements.txt
   ```

2. **Deploy**:
   - Push to your hosting provider
   - Set environment variables in hosting dashboard

## 📝 API Documentation

The backend provides the following endpoints:

- `GET /api/` - API status
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)
- `GET /api/contact/{id}` - Get specific contact message

Full API documentation is available at `/docs` when running the backend server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **FastAPI** - For the modern Python web framework
- **SendGrid** - For email service integration

## 📞 Support

If you need help with setup or have questions:

- **Email**: bhanutejagummadevelli@gmail.com
- **GitHub**: [Gbhanuteja22](https://github.com/Gbhanuteja22)
- **LinkedIn**: [Bhanu Gummadavelli](https://linkedin.com/in/bhanu-gummadavelli)

---

**Built with ❤️ by Bhanu Teja**