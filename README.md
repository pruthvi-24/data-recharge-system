# Mobile Recharge Plan System

This project is a simple full-stack application for viewing mobile recharge plans and subscribing to them. It uses React for the frontend and Node.js/Express with MongoDB for the backend.

## 📁 Project Structure

```
mobile-recharge/
├── backend/
│   ├── models/
│   │   └── Subscription.js  (MongoDB Schema)
│   └── routes/
│       └── subscribe.js     (Express Route)
└── frontend/
    └── src/
        ├── App.js           (React Component)
        └── App.css          (Styles)
```

## 🚀 How to Run (Beginner Guide)

Since this is an exam/project code snippet, you'll need to set up the environment to run it.

### Prerequisites
- Node.js installed
- MongoDB installed and running locally (`mongodb://localhost:27017`)

### 1️⃣ Setting up the Backend

1. Create a `server.js` file in `backend/` (not included in strict snippets but needed to run):
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   const subscribeRoute = require('./routes/subscribe');

   const app = express();
   app.use(express.json());
   app.use(cors());

   // Connect to MongoDB
   mongoose.connect('mongodb://localhost:27017/mobile_recharge', {
     useNewUrlParser: true,
     useUnifiedTopology: true
   }).then(() => console.log('MongoDB Connected'))
     .catch(err => console.log(err));

   // Use Route
   app.use('/', subscribeRoute);

   app.listen(5000, () => console.log('Server running on port 5000'));
   ```
2. Initialize and install dependencies:
   ```bash
   cd backend
   npm init -y
   npm install express mongoose cors
   node server.js
   ```

### 2️⃣ Setting up the Frontend

1. Create a React app:
   ```bash
   npx create-react-app frontend
   ```
2. Replace `src/App.js` and `src/App.css` with the files provided in this project.
3. Start the React app:
   ```bash
   cd frontend
   npm start
   ```

## 🚀 How to Run the Project

You need to run the **Backend** and **Frontend** in two separate terminals.

### 1️⃣ Start the Backend (Terminal 1)
Open a terminal and run:
```bash
cd "d:\structred eng\mobile-recharge\backend"
npm start
```
*   This starts the server on `http://localhost:5000`.
*   It connects to your local MongoDB.

### 2️⃣ Start the Frontend (Terminal 2)
Open a **new** terminal (keep the first one running) and run:
```bash
cd "d:\structred eng\mobile-recharge\frontend"
npm run dev
```
*   This starts the React app.
*   Open the link shown (usually `http://localhost:3000`) in your browser.

### 3️⃣ Use the App
1.  **Sign Up**: Create a new account.
2.  **Login**: Use your new credentials.
3.  **Recharge**: Select a plan, pay (mock), and get your bill.
