import User from "../models/user.schema.js";

// check for existing user
export const userExists = async (email) => {
  const user = await User.findOne({ email });
  if (!user) return null;
  return user;
};

export const createUser = async (userData) => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

export const getUser = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

export const findAllUsers = async () => {
  const users = await User.find();
  return users;
};

export const updateUser = async (userId, updateData) => {
  const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
    new: true,
  });
  return updatedUser;
};

export const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  return deletedUser;
};
