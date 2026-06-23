import express from "express";
import { addCourseC, editCourseC, getAllCoursesC, getCourseC, removeCourseC } from "../controllers/kursaiController.js";
import { protect } from "../controllers/authController.js";
import validateNewCourse from "../validators/newCourseVal.js";
import validate from "../validators/validate.js";

const kursaiRouter = express.Router();

kursaiRouter.route("/courses").get(protect, getAllCoursesC);
kursaiRouter.route("/course/:id").get(protect, getCourseC);
kursaiRouter.route("/addCourse").post(protect, validate, validateNewCourse, addCourseC);
kursaiRouter.route("/editCourse/:id").patch(protect, editCourseC);
kursaiRouter.route("/deleteCourse/:id").delete(protect, removeCourseC);

export default kursaiRouter;