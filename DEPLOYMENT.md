# 🚀 Deployment Guide - Bhanu Teja Portfolio

This guide will help you deploy your portfolio to various hosting platforms.

## 🌐 Frontend Deployment Options

### Option 1: Vercel (Recommended)

1. **Prepare for deployment:**
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`
   - Follow the prompts
   - Set environment variables in Vercel dashboard

3. **Environment Variables (Vercel Dashboard):**
   ```
   REACT_APP_BACKEND_URL=https://your-backend-url.com
   ```

### Option 2: Netlify

1. **Build the project:**
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy to Netlify:**
   - Drag and drop the `build` folder to netlify.com
   - Or connect your GitHub repository
   - Set environment variables in Netlify dashboard

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   cd frontend
   yarn add --dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy:**
   ```bash
   yarn deploy
   ```

## 🖥️ Backend Deployment Options

### Option 1: Railway (Recommended)

1. **Prepare for deployment:**
   ```bash
   cd backend
   pip freeze > requirements.txt
   ```

2. **Create railway.toml:**
   ```toml
   [build]
   builder = "nixpacks"
   
   [deploy]
   startCommand = "uvicorn server:app --host 0.0.0.0 --port $PORT"
   
   [env]
   PORT = "8000"
   ```

3. **Deploy:**
   - Connect your GitHub repository to Railway
   - Set environment variables in Railway dashboard

### Option 2: Heroku

1. **Create Procfile:**
   ```
   web: uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

2. **Deploy:**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set MONGO_URL=your_mongodb_url
   heroku config:set SENDGRID_API_KEY=your_sendgrid_key
   ```

### Option 3: DigitalOcean App Platform

1. **Create app.yaml:**
   ```yaml
   name: bhanu-portfolio-api
   services:
   - name: api
     source_dir: backend
     github:
       repo: your-username/portfolio
       branch: main
     run_command: uvicorn server:app --host 0.0.0.0 --port 8080
     environment_slug: python
     instance_count: 1
     instance_size_slug: basic-xxs
     envs:
     - key: MONGO_URL
       value: your_mongodb_url
     - key: SENDGRID_API_KEY
       value: your_sendgrid_key
   ```

## 🗄️ Database Deployment

### Option 1: MongoDB Atlas (Recommended)

1. **Create a free cluster:**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com)
   - Create a new cluster
   - Set up database user and IP whitelist

2. **Update environment variables:**
   ```
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

### Option 2: Railway MongoDB

1. **Add MongoDB plugin in Railway**
2. **Use the provided connection string**

## 📧 Email Service Setup

### SendGrid Setup

1. **Create SendGrid account:**
   - Go to [SendGrid](https://sendgrid.com)
   - Complete email verification
   - Complete domain authentication (recommended)

2. **Create API Key:**
   - Go to Settings → API Keys
   - Create key with "Full Access"
   - Copy the API key

3. **Update environment variables:**
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   SENDER_EMAIL=your_verified_email@domain.com
   ```

## 🌍 Custom Domain Setup

### Frontend Domain

1. **Vercel:**
   - Go to project settings
   - Add custom domain
   - Update DNS records

2. **Netlify:**
   - Go to domain settings
   - Add custom domain
   - Update DNS records

### Backend Domain

1. **Railway:**
   - Go to project settings
   - Add custom domain
   - Update DNS records

2. **Heroku:**
   - Add custom domain in dashboard
   - Update DNS records

## 🔧 Environment Variables Summary

### Frontend (.env)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

### Backend (.env)
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio
DB_NAME=portfolio
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDER_EMAIL=your_verified_email@domain.com
```

## 📊 Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Backend API responds at /api/
- [ ] Database connection works
- [ ] Contact form sends emails
- [ ] Resume download works
- [ ] Dark/Light theme toggle works
- [ ] All pages load without errors
- [ ] Mobile responsiveness works
- [ ] Performance is optimized (use Lighthouse)

## 🔍 Troubleshooting

### Common Issues:

1. **CORS errors:**
   - Update CORS origins in backend
   - Check environment variables

2. **Database connection failed:**
   - Verify MongoDB URL
   - Check IP whitelist
   - Ensure database user has proper permissions

3. **Email not sending:**
   - Verify SendGrid API key
   - Check sender email is verified
   - Review SendGrid activity logs

4. **Build errors:**
   - Check Node.js version (v18+)
   - Clear node_modules and reinstall
   - Check for missing dependencies

## 📈 Performance Optimization

1. **Frontend:**
   - Enable gzip compression
   - Use CDN for static assets
   - Optimize images
   - Implement lazy loading

2. **Backend:**
   - Use connection pooling
   - Implement caching
   - Add rate limiting
   - Monitor performance

## 🔒 Security Best Practices

1. **Environment Variables:**
   - Never commit .env files
   - Use different keys for production
   - Rotate API keys regularly

2. **CORS:**
   - Set specific origins in production
   - Don't use wildcard (*) in production

3. **Database:**
   - Use strong passwords
   - Enable IP whitelisting
   - Regular backups

## 📞 Support

If you encounter any issues during deployment:

- Check the logs in your hosting platform
- Verify all environment variables are set correctly
- Test locally before deploying
- Contact hosting provider support if needed

Good luck with your deployment! 🚀