import express from "express";
import { getUser } from "../controllers/userController.js";

const userRoute = express.Router();

// Nơi quản lý API của đối tượng User
userRoute.get("/get-user", getUser);

export default userRoute;
