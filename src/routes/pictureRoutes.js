import express from "express";
import {
  commentPicture,
  getAllPicture,
  getCommentById,
  getPictureByName,
  getPictureDetail,
  getSave,
} from "../controllers/pictureController.js";

const pictureRoute = express.Router();

pictureRoute.get("/get-all", getAllPicture);
pictureRoute.get("/get-by-name/:ten_hinh", getPictureByName);
pictureRoute.get("/get-detail/:hinh_id", getPictureDetail);
pictureRoute.get("/get-comment/:hinh_id", getCommentById);
pictureRoute.get("/get-save/:hinh_id", getSave);
pictureRoute.post("/comment", commentPicture);
export default pictureRoute;
