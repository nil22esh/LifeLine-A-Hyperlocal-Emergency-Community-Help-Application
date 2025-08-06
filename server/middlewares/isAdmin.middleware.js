export const isAdminMiddleware = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized to access this resource, only admins can perform this action.",
      });
    }
    next();
  } catch (error) {
    console.error(`Error in isAdminMiddleware: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
