# Deployment Guide

This guide explains how to deploy the CodeGenius application using Vercel for the frontend and separate services for the backends.

## Architecture

```
Frontend (React) → Vercel
    ↓
Express Backend → Vercel / Railway / Heroku
    ↓
Bot Backend (Java) → Azure App Service / Railway / Heroku
    ↓
MongoDB Atlas (already in cloud)
```

## Prerequisites

- Vercel Account (vercel.com)
- Optional: Railway or Heroku account for backends
- GitHub repository (already set up at https://github.com/maheennaaz/CodeGenius-)

---

## Step 1: Deploy Frontend on Vercel

### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project root
cd c:\Users\moham\OneDrive\Desktop\CodeGenius-main\CodeGenius-main

# Deploy
vercel
```

### Option B: Deploy via GitHub Integration (Recommended)

1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Choose the CodeGenius repository
4. Configure:
   - **Framework**: Create React App
   - **Root Directory**: `frontend`
5. Add Environment Variables:
   - `REACT_APP_EXPRESS_API_URL`: Your Express backend URL
   - `REACT_APP_BOT_API_URL`: Your Java bot backend URL
6. Click "Deploy"

---

## Step 2: Deploy Express Backend

### Option A: Firebase (Free tier available)

```bash
# Install Firebase Tools
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase
firebase init

# Deploy
firebase deploy
```

### Option B: Railway (Recommended - $5/month)

1. Go to https://railway.app
2. Create new project
3. Connect GitHub repository
4. Select `express-backend` directory
5. Add environment variables:
   - `MONGODB_URL`: From your .env
   - `PORT`: 5000
6. Deploy automatically

### Option C: Vercel (Free tier)

1. Create separate Vercel project for Express backend
2. Connect the GitHub repo
3. Set Root Directory: `express-backend`
4. Add environment variables
5. Deploy

---

## Step 3: Deploy Java Bot Backend

### Option A: Azure App Service

1. Create Azure account and resource group
2. Create App Service for Java
3. Connect GitHub repository
4. Configure deployment
5. Add environment variables for OpenAI API key

### Option B: Railway

1. New project on Railway
2. Add Docker (create Dockerfile in java-backend/Bot/)
3. Connect GitHub
4. Deploy

### Create Dockerfile for Java Bot

```dockerfile
# java-backend/Bot/Dockerfile
FROM openjdk:17-jdk-slim
COPY target/Bot-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

---

## Environment Variables Summary

### Frontend (.env)
```
REACT_APP_EXPRESS_API_URL=https://your-express-url.com
REACT_APP_BOT_API_URL=https://your-bot-url.com
```

### Express Backend (.env)
```
url=mongodb+srv://user:password@cluster.mongodb.net/db
PORT=5000
```

### Java Bot Backend (.env or properties)
```
OPENAI_API_KEY=sk-...
PORT=8080
```

---

## Testing Deployment

After deployment:

1. Visit your Vercel frontend URL
2. Check browser console for API connection errors
3. Test API endpoints from frontend
4. Verify database connectivity

---

## Troubleshooting

**Frontend blank page:**
- Check environment variables are set
- Verify backend URLs are correct
- Check browser console for errors

**API calls failing:**
- Ensure backend URLs in frontend env vars are correct
- Check CORS configuration in Express backend
- Verify backend is running and accessible

**Java Bot not connecting:**
- Verify OpenAI API key is valid
- Check Java version compatibility (needs 17+)
- Review application logs in Azure/Railway

---

## Next Steps

1. Deploy frontend first (easiest)
2. Deploy Express backend
3. Update frontend environment variables with backend URLs
4. Test integration
5. Deploy Java bot backend
