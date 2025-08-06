import jwt from "jsonwebtoken";
import User from "../models/user.schema.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies.auth_token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access. Please login first.",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message:
          "You are not authorized to access this resource. Please login first.",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(`Error in authMiddleware: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
