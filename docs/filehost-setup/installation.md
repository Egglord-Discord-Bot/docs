# Cloud Server Installation Guide

This guide explains how to set up and run the **Cloud Storage Server** including both the **Backend API** and **Frontend Application**.

---

## 1. Prerequisites
Before starting, ensure you have:
- **Node.js 18+** installed
- **MySQL database** available
- **Git** installed
- **Stripe account** (optional for payments)
- **OAuth credentials** for Google/Discord (optional)

---

## 2. Repository Structure
```
root/
 ├── backend/    → Backend API (Node.js + Prisma)
 └── frontend/   → Next.js Frontend
```

---

# 3. Environment Variables
You must configure **two separate .env files**: one for the backend and one for the frontend.

---

## 3.1 Backend API `.env`
Create `storage-service/.env`:
```
DATABASE_URL=""
BETTER_AUTH_SECRET=""
FRONTEND_URL=""
PORT=""
DEBUG=
```

---

## 3.2 Frontend `.env`
Rename `website/.env.example` to `website/.env`:
```
BETTER_AUTH_URL=""
BETTER_AUTH_SECRET=""
NEXT_PUBLIC_COMPANY_NAME=""
NEXT_PUBLIC_CURRENCY_SYMBOL="£"
NEXT_PUBLIC_SUPPORT_EMAIL=""

BACKEND_URL=""
DATABASE_URL=""

## Social Providers
DISCORD_CLIENT_ID=""
DISCORD_CLIENT_SECRET=""

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

## Stripe integration
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

## Email integration
EMAIL_SERVER_HOST=""
EMAIL_SERVER_PORT=""
EMAIL_SERVER_USER=""
EMAIL_SERVER_PASSWORD=""
```

---

# 4. Backend Installation
Navigate to the backend folder:
```
cd backend
```

Install dependencies:
```
npm install
```

Run initial database migration:
```
npx prisma migrate dev --name init
```

Generate Prisma client:
```
npx prisma generate
```

Start the backend:
```
npm run start
```

The backend API should now be running on the port specified in `.env`.

---

# 5. Frontend Installation
Navigate to the frontend folder:
```
cd frontend
```

Install dependencies:
```
npm install
```

Generate Prisma client (required if using Prisma in Frontend utilities):
```
npx prisma generate
```

Build the production bundle:
```
npm run build
```

Start the server:
```
npm run start
```

The frontend should now be accessible in your browser.

---

# 6. Common Issues
- **Prisma error: DATABASE_URL not found** → Ensure `.env` exists in both backend & frontend.
- **CORS errors** → Check `FRONTEND_URL` and `BACKEND_URL` values.
- **Authentication errors** → Make sure `BETTER_AUTH_SECRET` matches across both services.
- **Webhook signature invalid** → Verify `STRIPE_WEBHOOK_SECRET`.

---

# 7. Deployment Tips
- Use **PM2** or **Docker** to keep services running.
- Use **Nginx** reverse proxy for HTTPS.
- Configure environment variables in your deployment provider.

---