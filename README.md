# Auth_app

A simple authentication app with MERN.

## 🚀 Live Demo

[Deployed Application](https://auth-app-1-alpha.vercel.app/)

## 📚 Overview

Auth_app is a full-stack authentication project that allows users to register, log in, and securely manage their sessions. It leverages a React frontend built with Vite, and a backend powered by Express.js and MongoDB.

## ✨ Features

- User Registration and Login
- Secure Authentication Flow
- Responsive Design
- Session Management

## 🛠️ Tech Stack

- **Frontend:** Vite + React + JavaScript + CSS + HTML
- **Backend:** Express.js + JavaScript
- **Database:** MongoDB

## 🖥️ Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/saurabhduhariya/Auth_app.git
   cd Auth_app
   ```

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

4. Configure environment variables (see `.env.example` if provided).

5. Start the backend server:

   ```bash
   npm run dev
   # or
   node index.js
   ```

6. In a separate terminal, start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

7. Open your browser and visit `http://localhost:5173` (or as configured).

## 📂 Project Structure

```
Auth_app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── index.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   └── ...
│   ├── vite.config.js
│   └── ...
├── package.json
└── README.md
```



Feel free to contribute or raise issues!
