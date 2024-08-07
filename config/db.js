import mongoose from "mongoose";

const DB = () => {
    mongoose.connect('mongodb://localhost:27017/jwt_project');
    console.log("connected")
}
export default DB;