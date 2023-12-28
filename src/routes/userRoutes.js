import express from "express";
import {
  getUser,
  getUserById,
  getUserSavedPicture,
  getPictureCreatedByUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

// Nơi quản lý API của đối tượng User
userRoute.get("/get-user", getUser);
userRoute.get("/get-info", getUserById);
userRoute.get("/get-savedpicture", getUserSavedPicture);
userRoute.get("/get-createdpicture", getPictureCreatedByUser);

export default userRoute;
