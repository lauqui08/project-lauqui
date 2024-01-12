import mongoose from "mongoose";
const dbcon = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected!");
  } catch (error) {
    console.log("Database connection error!");
    console.log(error.message);
  }
};

export default dbcon;
