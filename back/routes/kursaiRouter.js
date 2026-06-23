import express from "express";
import { getAllCoursesC, getCourseC } from "../controllers/kursaiController.js";

const kursaiRouter = express.Router();

kursaiRouter.get("/courses", getAllCoursesC);
kursaiRouter.get("/courses/:id", getCourseC);

export default kursaiRouter;