# Task Management Mini Application

---

## Features

- User Registration and Login (JWT Authentication)
- Create Tasks
- View User-Specific Tasks
- Delete Tasks (Admin Only)
- Role-Based Access Control
- REST API backend
- React frontend dashboard

---

## Tech Stack

### Frontend
- React
- JavaScript
- Fetch API
- CSS (Inline styling)

### Backend
- Node.js
- Express.js
- PostgreSQL 16
- JWT Authentication
- bcrypt (if used for password hashing)

### Database
- PostgreSQL

---

## Project Structure


Project/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ ├── config/
│ │ └── app.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── api.js
│ │ └── App.js
│ └── package.json


---

## Environment Variables

Backend `.env` (recommended):


- PORT=5000
- DATABASE_URL=postgresql://postgres:postgres@localhost:5432/primetrade
- JWT_SECRET=secret


---

## Installation & Setup

### 1. Clone Repository

https://github.com/anshumanshahu/.git


cd Task-Management-Mini-Applicaton


---

### 2. Backend Setup


cd backend
npm install
npm start


Server runs on:

http://localhost:5000


---

### 3. Frontend Setup


cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000


---

## API Endpoints

### Auth Routes


- POST /api/v1/auth/register
- POST /api/v1/auth/login


### Task Routes


- GET /api/v1/tasks (Authenticated user)
- POST /api/v1/tasks (Create task)
- DELETE /api/v1/tasks/:id (Admin only)


---

## Authentication Flow

- User logs in → receives JWT token
- Token stored in localStorage
- Token sent in Authorization header
- Backend verifies token for protected routes


## Notes

- PostgreSQL must be running locally
- JWT secret should not be hardcoded in production

---

## Author

Anshuman Shahu
