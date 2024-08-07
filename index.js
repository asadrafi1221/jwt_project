import express from "express";
import DB from "./config/db.js";
import AppRoutes from "./routes/index.js";

const app = express();
const port = 7001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", AppRoutes);

app.listen(port, () => {
    console.log(`App running on ${port}`);
    DB();
});