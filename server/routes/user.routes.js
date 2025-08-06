import express from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserProfile,
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { authMiddleware } from "./../middlewares/auth.middleware.js";
import {
  loginUserValidations,
  registerUserValidations,
} from "./../validations/user.validations.js";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware.js";

// create a new router instance
const userRouter = express.Router();

// main user routes
userRouter.post("/register", registerUserValidations, registerUser);
userRouter.post("/login", loginUserValidations, loginUser);
userRouter.get("/my-profile", authMiddleware, getUserProfile);
userRouter.get(
  "/get-all-users",
  authMiddleware,
  isAdminMiddleware,
  getAllUsers
);
userRouter.get("/logout", authMiddleware, logoutUser);
userRouter.put("/update-profile", authMiddleware, updateUserProfile);
userRouter.delete(
  "/delete-profile/:id",
  authMiddleware,
  isAdminMiddleware,
  deleteUserById
);

export default userRouter;
