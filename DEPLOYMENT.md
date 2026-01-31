# Vercel Deployment Guide

## Prerequisites

- Vercel account (https://vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- Neon PostgreSQL database already set up

## Steps to Deploy

### 1. Connect Your Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your Git provider and authorize
4. Select your repository
5. Click "Import"

### 2. Configure Environment Variables

In Vercel Project Settings → Environment Variables, add:

```
DATABASE_URL=postgresql://gym_owner:npg_fnepkSioax49@ep-round-violet-a8dchyne-pooler.eastus2.azure.neon.tech/cyberlymph?sslmode=require&channel_binding=require
GMAIL_EMAIL=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
NODE_ENV=production
```

**Important**: Use "Reference" for sensitive values if possible, or add them as "Encrypted" secrets.

### 3. Build Settings

The project is pre-configured with:
- **Build Command**: `npm run build` (automatically detected)
- **Output Directory**: `dist/spa` (for the frontend)
- **Start Command**: Handled by the Node.js server

### 4. Deploy

Click "Deploy" and wait for the build to complete. Vercel will:

1. Install dependencies with `npm install`
2. Run `npm run build` to build both client and server
3. Start the Node.js server on the provided port
4. Serve the built React app from the server

## What Gets Built

- **Client (React SPA)**: Compiled to `dist/spa/`
- **Server (Express)**: Compiled to `dist/server/production.mjs`
- **Static files**: Served by the Express server

## Database Migrations

If you need to run database migrations:

1. The `initializeDatabase()` function in `server/db/init.ts` automatically creates tables on server startup
2. Tables are created if they don't exist, so no manual migration is needed

## Monitoring

After deployment:

1. Check Vercel Logs in the dashboard for any errors
2. Test the application by visiting your Vercel project URL
3. Test the API endpoints at `/api/send-inquiry`

## Troubleshooting

### Database Connection Errors

- Verify `DATABASE_URL` is correctly set in environment variables
- Check that Neon allows connections from Vercel's IP ranges
- Ensure the database exists and tables are created

### API Routes Return 404

- Check that the server build completed successfully
- Verify all API routes are registered in `server/index.ts`
- Check Vercel logs for any server startup errors

### Email Not Sending

- Verify `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` are correct
- Check that Gmail App Passwords are enabled in your Google account
- Review Vercel logs for nodemailer errors

## Local Testing Before Deploy

```bash
# Build the project
npm run build

# Test the production build locally
npm run start
```

Then visit `http://localhost:3000` to verify everything works.

## More Information

- [Vercel Documentation](https://vercel.com/docs)
- [Node.js Deployment on Vercel](https://vercel.com/docs/frameworks/nodejs)
- [Neon Vercel Integration](https://neon.tech/docs/guides/vercel)
