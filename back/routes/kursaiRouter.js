import express from "express";
import { getAllCoursesC } from "../controllers/kursaiController.js";

const kursaiRouter = express.Router();

kursaiRouter.get("/courses", getAllCoursesC);


export default kursaiRouter;