import { responseData } from "../config/response.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);
export const getUser = async (req, res) => {
  try {
    let data = await model.nguoi_dung.findAll();
    responseData(res, "Thành Công", data, 200);
  } catch (error) {
    responseData(res, "Lỗi từ backend..", "", 500);
  }
};
