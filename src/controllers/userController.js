import { responseData } from "../config/response.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { createToken, decodeToken } from "../config/jwt.js";
import bcrypt from "bcrypt";

let model = initModels(sequelize);
export const getUser = async (req, res) => {
  try {
    let data = await model.nguoi_dung.findAll();
    responseData(res, "Thành Công", data, 200);
  } catch (error) {
    responseData(res, "Lỗi từ backend..", "", 500);
  }
};

export const getUserById = async (req, res) => {
  let { token } = req.headers;

  let dToken = decodeToken(token);
  let { nguoi_dung_id } = dToken.data;

  try {
    let data = await model.nguoi_dung.findOne({
      where: {
        nguoi_dung_id,
      },
    });

    // newComment sẽ giữ thông tin của bình luận mới được tạo
    responseData(res, "Lấy thông tin user thành công", data, 200);
  } catch (error) {
    console.error(error);
    responseData(res, "Lỗi backend...", "", 500);
  }
};

export const getUserSavedPicture = async (req, res) => {
  let { token } = req.headers;

  let dToken = decodeToken(token);
  let { nguoi_dung_id } = dToken.data;

  try {
    let data = await model.luu_anh1.findAll({
      where: {
        hinh_id: 1,
      },
      include: [
        {
          model: model.hinh_anh,
          as: "hinh",
        },
        {
          model: model.nguoi_dung,
          as: "nguoi_dung",
        },
      ],
    });

    // newComment sẽ giữ thông tin của bình luận mới được tạo
    responseData(res, "Lấy các ảnh ảnh đã được lưu ", data, 200);
  } catch (error) {
    console.error(error);
    responseData(res, "Lỗi backend...", "", 500);
  }
};
