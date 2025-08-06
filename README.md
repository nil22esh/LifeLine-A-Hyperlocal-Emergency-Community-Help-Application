# LifeLine-A-Hyperlocal-Emergency-Community-Help-Application

LifeLine is a mobile-first platform where people can request urgent help in real-time — whether it's a health emergency, an accident, being stuck during travel, or needing blood — and trusted local responders (volunteers, medics, local businesses, etc.) get notified immediately based on location, availability, and expertise.

---

# 👤 User Module – REST API

This module provides user authentication and profile management APIs, including registration, login, logout, profile updates, and admin-level user management. It supports middleware for authentication and role-based access control.

---

## 📌 Features

- User registration with validation
- Secure login and logout
- Authenticated profile viewing and editing
- Admin-only access to view all users and delete accounts
- Middleware-based route protection
- Data validation on registration and login

---

## 🚀 API Endpoints

| Method | Endpoint              | Access        | Description                       |
| ------ | --------------------- | ------------- | --------------------------------- |
| POST   | `/register`           | Public        | Register a new user               |
| POST   | `/login`              | Public        | Authenticate user and issue token |
| GET    | `/my-profile`         | Authenticated | Get current user's profile        |
| PUT    | `/update-profile`     | Authenticated | Update current user's profile     |
| GET    | `/logout`             | Authenticated | Log out the current user          |
| GET    | `/get-all-users`      | Admin Only    | Retrieve all users                |
| DELETE | `/delete-profile/:id` | Admin Only    | Delete a user by ID               |

---

## 🔐 Middleware

- `authMiddleware` – Protects routes by verifying JWT tokens.
- `isAdminMiddleware` – Grants access to admin-only routes.
- `registerUserValidations` – Validates registration input.
- `loginUserValidations` – Validates login input.

---

## 📂 Folder Structure

```
server/
├── controllers/
│   └── user.controller.js
├── db/
│	└── db.js
├── middlewares/
│   ├── authMiddleware.js
│   └── isAdminMiddleware.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── services/
│   └── user.service.js
├── utils/
├── validations/
│   ├── registerUserValidations.js
│   └── loginUserValidations.js
└── server.js
```

---
