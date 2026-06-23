import express from "express";
import { addCourseC, editCourseC, getAllCoursesC, getCourseC } from "../controllers/kursaiController.js";

const kursaiRouter = express.Router();

kursaiRouter.get("/courses", getAllCoursesC);
kursaiRouter.get("/course/:id", getCourseC);
kursaiRouter.post("/addCourses", addCourseC);
kursaiRouter.edit("/editCourses/:id", editCourseC);

export default kursaiRouter;