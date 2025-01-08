# Next.js Authentication Page with NextAuth, PostgreSQL, and Prisma

This project is a simple authentication page built with Next.js. It leverages NextAuth for authentication, PostgreSQL as the database, and Prisma as the ORM.

## Features

- User authentication (Sign In / Sign Out)
- Secure session management with NextAuth
- PostgreSQL database integration via Prisma
- Pre-configured for easy setup and deployment

---

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/imtaki/NextJSAuth.git
cd nextprismatutorial
```

### 2. Install Dependencies

```bash
pnpm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure it as follows:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
NEXTAUTH_SECRET=your-secret-key
```

### 4. Initialize Prisma

Run the following commands to set up Prisma and sync your database schema:

```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the Development Server

```bash
pnpm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Project Structure

```
.
├── prisma/                # Prisma schema and migrations
│   ├── schema.prisma      # Prisma schema
├── pages/                 # Next.js pages
│   ├── api/auth/[...nextauth].js # NextAuth API route
│   ├── index.js           # Home page
├── styles/                # CSS and styling
├── .env                   # Environment variables
├── README.md              # Project documentation
├── package.json           # Project dependencies
```

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
