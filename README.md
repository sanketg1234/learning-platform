# Learning Platform

A full-stack interactive Learning Management System (LMS) built using the MERN stack (MongoDB, Express, React, Node.js). Users can watch video lectures, enroll in courses and track progress.

## 🔧 Tech Stack
- **Frontend**: React , Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Authentication**: JWT + bcrypt
- **Video Storage/Streaming**: Cloudinary
- **Architecture**: RESTful APIs

## ✨ Features
- Role-based access: Student & Instructor
- Secure sign up & login
- Cloudinary video upload + playback
- Create, edit & delete courses (Instructor)
- Enrollment functionality for students
- Track course completion progress
- Fully responsive UI (Tailwind CSS)

## 📁 Folder Structure
learning-platform/
└── client/
    └── src/
        ├── App/
        ├── pages/
        ├── features/
        ├── components/
        ├── lib/
        ├── layout/
└── server/
    ├── controllers/
    ├── database/
    ├── routes/
    ├── models/
    ├── utils/
    ├── middleware/
    └── index.js



> ✅ `.env` stays **only in server folder**  
> ❌ Do NOT put `.env` in root or client

## 🚀 Getting Started
### 1️⃣ Clone the repo
```bash
git clone https://github.com/sanketg1234/learning-platform.git
cd learning-platform
cd server
npm install
npm run dev
cd ../client
npm install
npm start
