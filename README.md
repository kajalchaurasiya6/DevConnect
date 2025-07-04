# 🚀 DevConnect (Work in Progress)

**DevConnect** is a personal full-stack  web application where developers can connect, share code snippets or ideas, and grow together.

It is inspired by platforms like Instagram and LinkedIn, with a focus on developer content, skill-based filtering, and collaboration.

---

## 📌 Key Features

- 🔐 Authentication system (Login, Signup)
- 🏠 Home feed with trending posts and skill-based tag filters
- ✍️ Post creation, likes, comments, and emoji reactions
- 👥 Follow/connect with other developers
- 🧑‍💼 User profile with editable information
- 📊 Developer dashboard with charts (coming soon)
- ⚙️ Responsive layout (Navbar, Sidebar, Footer)

---
## 🚀 Project Status
 Frontend
✅ Layout: Fully responsive layout completed

🔐 Authentication:

Implemented secure login and signup functionality

Integrated refresh token and access token mechanism

🔄 API Integration: Connected frontend with backend authentication APIs using secure token-based communication

🧠 Backend
🏗️ Setup:

Backend environment initialized with Node.js and Express

Connected to MongoDB Atlas for cloud database storage

🔐 Authentication APIs:

POST /signup – Create new user accounts

POST /login – User authentication with access and refresh tokens

POST /refresh – Refresh token logic to maintain session

🛡️ Security:

Used JWT for secure token management

Stored refresh tokens safely to prevent misuse

## 🔧 Tech Stack:
 🖥️ Frontend
React.js – For building dynamic, component-based UI

TypeScript – For strong typing and improved code quality

Tailwind CSS – Utility-first CSS for rapid and responsive UI design

Shadcn UI – Modern, accessible UI components built on top of Radix UI

Heroicons – For beautiful and customizable SVG icons

Vite – Fast development environment and build tool

React Router – For seamless client-side routing

React Hook Form – For managing form state efficiently

Zod – For robust form validation and schema definition

Vitest + React Testing Library – For unit and component testing

🛠️ Backend
Node.js + Express.js – For building scalable RESTful APIs

Mongoose – ODM for MongoDB to model backend data

🗄️ Database
MongoDB – NoSQL database for flexible and scalable storage

🔗 Other Tools
Axios – For making HTTP requests and handling API integration

Git + GitHub – For version control and code hosting

## 🧭 Getting Started

cd client
npm install
npm run dev  