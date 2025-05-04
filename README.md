# 🏫 Janchetana — School Website

**Janchetana** is a modern, full-stack school website built using **Next.js**, **PostgreSQL**, and **Prisma**. Designed to be fast, scalable, and easy to maintain, this platform aims to provide students, teachers, and parents with a seamless digital experience.

## 🚀 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) – React framework with SSR capabilities
- **Database:** [PostgreSQL](https://www.postgresql.org/) – Powerful, open source object-relational DB
- **ORM:** [Prisma](https://www.prisma.io/) – Type-safe database access with auto-generated queries

## ✨ Features

- 📄 Dynamic content management for school news, notices, and events
- 👨‍🏫 Staff and faculty directory
- 🗓️ Academic calendar & schedules
- 🧑‍🎓 Student dashboard (planned)
- 🔐 Secure authentication (coming soon)
- 🌐 Responsive design for mobile and desktop

## 🛠️ Installation

To get started with development:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/janchetana.git
   cd janchetana
Install dependencies

bash
Copy code
npm install
# or
yarn install
Set up environment variables

Create a .env file in the root directory and add your PostgreSQL database URL:

env
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/janchetana"
Run database migrations

bash
Copy code
npx prisma migrate dev --name init
Start the development server

bash
Copy code
npm run dev
Open http://localhost:3000 to see the app in action.

🧪 Scripts
npm run dev – Start the development server
npm run build – Build for production
npx prisma studio – Open Prisma Studio to view your database in the browser
📁 Project Structure
/pages         → Route-based pages
/components    → Reusable UI components
/prisma        → Prisma schema and migrations
/utils         → Helper functions
/public        → Static assets
📌 Roadmap
 Core pages (Home, About, Contact)
 PostgreSQL + Prisma integration
 Admin panel for content management
 Role-based authentication
 Student and teacher dashboards
 Multilingual support

Built with ❤️ by the ShunyaTech.