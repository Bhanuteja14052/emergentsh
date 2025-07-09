import requests
import unittest
import json
import os
from datetime import datetime

class PortfolioAPITest(unittest.TestCase):
    def setUp(self):
        # Get the backend URL from the frontend .env file
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    self.base_url = line.strip().split('=')[1]
                    break
        
        print(f"Using backend URL: {self.base_url}")
        self.api_url = f"{self.base_url}/api"
        
        # Test data for contact form
        self.contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "subject": "API Test",
            "message": "This is a test message from the automated test suite."
        }

    def test_01_root_endpoint(self):
        """Test the root API endpoint"""
        print("\n🔍 Testing root API endpoint...")
        response = requests.get(f"{self.api_url}/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["message"], "Bhanu Teja Portfolio API")
        self.assertEqual(data["version"], "1.0.0")
        print("✅ Root API endpoint test passed")

    def test_02_health_endpoint(self):
        """Test the health check endpoint"""
        print("\n🔍 Testing health check endpoint...")
        response = requests.get(f"{self.api_url}/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["status"], "healthy")
        self.assertIn("timestamp", data)
        print("✅ Health check endpoint test passed")

    def test_03_contact_endpoint(self):
        """Test the contact form submission endpoint"""
        print("\n🔍 Testing contact form submission...")
        response = requests.post(
            f"{self.api_url}/contact",
            json=self.contact_data
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("id", data)
        self.assertIn("message", data)
        self.assertIn("timestamp", data)
        print("✅ Contact form submission test passed")

    def test_04_resume_endpoint(self):
        """Test the resume download endpoint"""
        print("\n🔍 Testing resume download...")
        response = requests.get(f"{self.api_url}/resume")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers["Content-Type"], "application/pdf")
        self.assertIn("Gummadavelli_Bhanu_Teja_Resume.pdf", response.headers["Content-Disposition"])
        # Check if we got actual PDF content (PDF files start with %PDF)
        self.assertTrue(response.content.startswith(b"%PDF"))
        print("✅ Resume download test passed")

    def test_05_invalid_endpoint(self):
        """Test an invalid endpoint to verify error handling"""
        print("\n🔍 Testing invalid endpoint...")
        response = requests.get(f"{self.api_url}/nonexistent")
        self.assertEqual(response.status_code, 404)
        print("✅ Invalid endpoint test passed")

if __name__ == "__main__":
    print("🚀 Starting Portfolio API Tests")
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
    print("\n📊 All API tests completed")