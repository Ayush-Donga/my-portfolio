# Portfolio Website

Modern portfolio website built with Next.js 15, React, PostgreSQL, Prisma, and TailwindCSS v4.

## 🚀 Setup Instructions

1.  **Environment Variables**

    - The `.env` file is pre-configured for local development. ensure your PostgreSQL database is running.
    - Default connection: `postgresql://postgres:password@localhost:5432/myportfolio` (Update if needed).
    - **Authentication**: `NEXTAUTH_URL` and `NEXTAUTH_SECRET` are now configured.

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Database Setup**
    Initialize the database and generate the Prisma client:

    ```bash
    npx prisma db push
    npx prisma generate
    ```

4.  **Seed Data**
    Load your resume data into the database:

    ```bash
    npx tsx prisma/seed.ts
    ```

5.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## 🔐 Authentication

- The project allows for Admin login.
- Sign In URL: `/auth/signin`
- Default Credentials (Hardcoded for Demo):
  - Email: `ayush@example.com`
  - Password: `admin123`

## 🛠 Features

- **Modern UI**: Dark mode, Glassmorphism, and gradient effects.
- **Dynamic Content**: Experience, Projects, and Skills are fetched from the database.
- **Responsive**: Fully optimized for mobile and desktop.
- **Auth**: NextAuth.js configured.
- **Tech Stack**: Next.js 15.0.3, Prisma, PostgreSQL, TailwindCSS v4.

## ⚠️ Troubleshooting

- **Ports**: If port 3000 is open, the server will try 3001. Check terminal output.
- **Database**: Ensure PostgreSQL is running.
