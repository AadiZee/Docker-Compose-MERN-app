import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  //port
  PORT: process.env.PORT || 3001,
  //env
  NODE_ENV: process.env.NODE_ENV,
  //db
  MONGO_URI: process.env.MONGO_URI,
};
