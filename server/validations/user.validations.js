import { check } from "express-validator";

export const registerUserValidations = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Invalid email format"),
  check("email").notEmpty().withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  check("phone").notEmpty().withMessage("Phone number is required"),
];
export const loginUserValidations = [
  check("email").isEmail().withMessage("Invalid email format"),
  check("email").notEmpty().withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
];
