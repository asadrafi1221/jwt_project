import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constants/index.js";

const privateApi = async (req, res, next) => {
    // const token = req.headers.authorization.split(" ")[1];
    const bToken = req.headers.authorization;
    console.log(bToken);


    const split_token = bToken.split(" ");
    console.log(split_token);
    const token = split_token[1];

    console.log(token);
    if(!token) {
        return res.status(404).json({message: "token not found"})
    }
    let decoded;
    try {
        decoded = jwt.verify(token, secretKey);
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
    console.log(decoded);
    const verifyUser = await User.findOne({_id: decoded._id});
    if(!verifyUser) {
        return res.status(401).json({message: "Unauthorized Access"})
    }
    try {
        return res.status(200).json("This is the private api");
    } catch (error) {
        next(error)
    }
}
export default privateApi;