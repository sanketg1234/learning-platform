# 📚 Learning Management System (LMS)

A *full-stack Learning Management System* built using *MERN stack* (MongoDB, Express.js, React.js, Node.js) with integrated *Cloudinary* for media storage and *Stripe* for secure payments.  
It enables *instructors* to create and manage courses, and *students* to enroll, watch lectures, and track their learning progress.

---

## 🚀 Features

### 👨‍🏫 For Instructors
- Create, update, and delete courses.
- Upload lectures (video/image) to Cloudinary.
- Manage course content and structure.
- View enrolled students.

### 🎓 For Students
- Browse and enroll in courses.
- Watch video lectures.
- Track course progress.
- View quiz results (if applicable).

### 🔒 Authentication & Security
- *JWT-based authentication*.
- Role-based access control (*Instructor / Student*).
- Password hashing with *bcrypt*.

### 💳 Payments
- Secure payment processing via *Stripe*.
- Course enrollment after successful payment.

---

## 🛠 Tech Stack

*Frontend:*
- React.js
- Tailwind CSS (optional styling framework)
- Axios

*Backend:*
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT & bcrypt for authentication

*Integrations:*
- Cloudinary (media storage)
- Stripe (payment gateway)

*Development Tools:*
- Git & GitHub
- Postman (API testing)

---

## 📂 Project Structure
learning-platform/
│
├── client/                             # Frontend (Vite + React + TailwindCSS + shadcn/ui)
│   ├── public/                         # Static assets
│   ├── src/                           # React components, pages, hooks, state management
│   ├── .gitignore
│   ├── components.json                  # shadcn/ui component config
│   ├── eslint.config.js                 # ESLint rules
│   ├── index.html                       # Main HTML template
│   ├── jsconfig.json                    # Path alias config
│   ├── package-lock.json
│   ├── package.json                     # Frontend dependencies
│   ├── postcss.config.js                # TailwindCSS PostCSS config
│   ├── tailwind.config.js               # TailwindCSS theme config
│   └── vite.config.js                   # Vite bundler config
│
├── server/                             # Backend (Node.js + Express + MongoDB)
│   ├── controllers/                     # Handles business logic (auth, course, lecture, payment, etc.)
│   ├── database/                         # MongoDB connection setup
│   ├── middlewares/                      # Middleware (JWT auth, error handling, etc.)
│   ├── models/                           # Mongoose models (User, Course, Lecture, Quiz, etc.)
│   ├── routes/                           # API route definitions
│   ├── utils/                            # Helper utilities (Cloudinary config, token generation, etc.)
│   ├── .gitignore
│   ├── index.js                          # Main Express server entry point
│   ├── package-lock.json
│   └── package.json                      # Backend dependencies
│
└── README.md                             # Project documentation
