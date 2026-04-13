# Environment Configuration

## Frontend (.env in frontend/ directory)
REACT_APP_EXPRESS_API_URL=http://localhost:5000/api
REACT_APP_BOT_API_URL=http://localhost:8080/api

## Production URLs (for Vercel deployment)
# Update these with your deployed backend URLs

# Express Backend API URL (deploy on Vercel, Railway, or Heroku)
REACT_APP_EXPRESS_API_URL=https://your-express-backend-url.vercel.app/api

# Java Bot API URL (deploy on Azure App Service, Railway, or similar)
REACT_APP_BOT_API_URL=https://your-bot-backend-url.azurewebsites.net/api

## Backend Configuration

### Express Backend
# Create .env file in express-backend/
url=mongodb+srv://mohammadimaheen86_db_user:s5R5ID1uCZV1Lm7Z@cluster0.21x6ybi.mongodb.net/codegenius?appName=Cluster0
PORT=5000

### Java Bot Backend
# Create .env file in java-backend/Bot/
OPENAI_API_KEY=your-openai-api-key-here
PORT=8080
