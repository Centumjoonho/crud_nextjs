import mongoose from "mongoose";
//for what?
mongoose.set("strictQuery", false);

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export default connectMongo;
