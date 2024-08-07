import createUser from "../controllers/createUser.js";
import publicApi from "../controllers/publicApi.js";
import privateApi from "../controllers/privateApi.js";
import express from "express";

const router = express.Router();

router.post("/create-user", createUser);
router.get("/public", publicApi);
router.get("/private", privateApi);
export default router;