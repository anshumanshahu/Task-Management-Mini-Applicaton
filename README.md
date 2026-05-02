# Task Management Mini Application

## Overview
This project is a full-stack Task Management Application built as part of a Backend Developer Internship assignment.

---

## Features

### Backend
- User Registration and Login with JWT Authentication
- Password hashing for security
- Role-based access control (User/Admin)
- CRUD APIs for Tasks
- Protected routes using middleware
- PostgreSQL database integration
- Error handling and modular architecture

### Frontend
- Built using React.js
- User authentication (Login/Register)
- Dashboard to manage tasks
- Create and delete tasks
- API integration using Fetch API

---

## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication

### Frontend
- React.js
- JavaScript
- CSS

---

## Project Structure


# frontend/src
├── api.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── Dashboard.js
│   ├── Login.js
│   └── Register.js
├── reportWebVitals.js
└── setupTests.js

# backend/src/
├── app.js
├── config
│   └── db.js
├── controllers
│   ├── authController.js
│   └── taskController.js
├── middlewares
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models
└── routes
    ├── authRoutes.js
    ├── taskRoutes.js
    └── testRoutes.js


---

## Setup Instructions

### 1. Clone Repository

git clone https://github.com/anshumanshahu/Task-Management-Mini-Applicaton.git

---

### 2. Backend Setup
- cd backend
- npm install
- npm start
 backend runs on localhost 5000


---

### 3. Frontend Setup

- cd frontend
- npm install
- npm start

  
Frontend runs on:

http://localhost:3000



## Environment Variables

Create a `.env` file inside backend:


PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/primetrade
JWT_SECRET=your_secret_key



---

## API Endpoints

### Authentication
- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`

### Tasks
- GET `/api/v1/tasks` (Protected)
- POST `/api/v1/tasks` (Protected)
- DELETE `/api/v1/tasks/:id` (Protected, role-based)

---
### Step 5: Create Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(10) DEFAULT 'user'
);
```

### Step 6: Create Tasks Table
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  user_id INTEGER REFERENCES users(id)
);
```

## Authentication Flow

- User logs in and receives a JWT token
- Token is stored in localStorage
- Token is sent in Authorization header for protected APIs
- Backend verifies token using middleware

---

## Security Practices

- Password hashing
- JWT authentication
- Protected routes
- Role-based access control

## GitHub Repo And Project Video Demonstration Link, Project Summary Doc

- Github : https://github.com/anshumanshahu/Task-Management-Mini-Applicaton.git
- Video Link : https://drive.google.com/file/d/1u-X5Wj7eBoxkwlZFkhUytccJpCFU0yg4/view?usp=sharing
- Doc : https://drive.google.com/file/d/1pwXMOJwvpGihye6xrlc0NFYUimtu9mbm/view?usp=sharing

---

## Creater 

Anshuman Shahu
