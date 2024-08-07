import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constants/index.js";

const createUser = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        const user = await User.create({
            ...data
        })
        const payload = {_id: user._id, name: user.name};
        const token = jwt.sign(payload, secretKey, { expiresIn: '5m'});
        return res.status(200).json({user: user, token: token});
    } catch (error) {
        next(error)
    }
}
export default createUser;