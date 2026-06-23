import express from "express";
import { addCourseC, editCourseC, getAllCoursesC, getCourseC, removeCourseC } from "../controllers/kursaiController.js";

const kursaiRouter = express.Router();

kursaiRouter.get("/courses", getAllCoursesC);
kursaiRouter.get("/course/:id", getCourseC);
kursaiRouter.post("/addCourse", addCourseC);
kursaiRouter.edit("/editCourse/:id", editCourseC);
kursaiRouter.delete("/deleteCourse/:id", removeCourseC);

export default kursaiRouter;