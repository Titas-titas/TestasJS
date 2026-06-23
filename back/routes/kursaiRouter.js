import express from "express";
import { addCourseC, getAllCoursesC, getCourseC } from "../controllers/kursaiController.js";

const kursaiRouter = express.Router();

kursaiRouter.get("/courses", getAllCoursesC);
kursaiRouter.get("/course/:id", getCourseC);
kursaiRouter.get("/addCourses", addCourseC);

export default kursaiRouter;