#!/bin/bash

echo "🚀 Bhanu Teja Portfolio Setup Script"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v18 or higher)"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python is not installed. Please install Python (v3.8 or higher)"
    exit 1
fi

# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "❌ Yarn is not installed. Installing yarn..."
    npm install -g yarn
fi

echo "✅ Prerequisites check passed!"
echo ""

# Frontend setup
echo "📦 Setting up Frontend..."
cd frontend
if [ ! -d "node_modules" ]; then
    yarn install
else
    echo "   Dependencies already installed"
fi
cd ..

# Backend setup
echo "📦 Setting up Backend..."
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
else
    echo "   Virtual environment already exists"
fi
cd ..

echo ""
echo "✅ Setup completed!"
echo ""
echo "🎯 Quick Start:"
echo "1. Update environment variables in backend/.env (especially SENDGRID_API_KEY)"
echo "2. Start MongoDB service: mongod"
echo "3. Backend: cd backend && source venv/bin/activate && uvicorn server:app --reload --host 0.0.0.0 --port 8001"
echo "4. Frontend: cd frontend && yarn start"
echo "5. Open http://localhost:3000"
echo ""
echo "📧 For email functionality:"
echo "   - Sign up at https://sendgrid.com"
echo "   - Get API key and update backend/.env"
echo ""
echo "📁 Replace placeholders:"
echo "   - Update frontend/public/resume.pdf with your actual resume"
echo "   - Update personal information in components"
echo ""
echo "🎉 Happy coding!"