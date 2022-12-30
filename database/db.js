import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", true);
const Connection = async () => {
  const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nxaiqcz.mongodb.net/myWhatsappClone?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error while  connecting with the database", error.message);
  }
};

export default Connection;
