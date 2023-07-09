import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    
  } catch (error) {
    //console.log(process.env.MONGO, HELLO)

    throw new Error("Connection failed!");
  }
};

export default connect;
