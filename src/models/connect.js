import { Sequelize } from "sequelize";
import config from "../config/config.js";

const sequelize = new Sequelize(config.database, config.user, config.pass, {
  host: config.host,
  port: config.port,
  dialect: config.dialect, // CSDL đang sử dụng
});
try {
  await sequelize.authenticate();
  console.log(
    "KẾT NỐI VỚI CƠ SỞ DỮ LIỆU THÀNH CÔNG, DATABASE: CAPSTONE_NODE37"
  );
} catch (error) {
  console.log(error);
}

export default sequelize;
