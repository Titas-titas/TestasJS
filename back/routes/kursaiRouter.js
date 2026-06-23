import express from "express";
import { addCourseC, editCourseC, getAllCoursesC, getCourseC, removeCourseC } from "../controllers/kursaiController.js";
import { protect } from "../controllers/authController.js";
import validateNewCourse from "../validators/newCourseVal.js";
import validate from "../validators/validate.js";

const kursaiRouter = express.Router();

kursaiRouter.route("/courses").get(protect, allowAccessTo("user", "admin"), getAllCoursesC);
kursaiRouter.route("/course/:id").get(protect, allowAccessTo("user", "admin"), getCourseC);
kursaiRouter.route("/addCourse").post(protect, allowAccessTo("admin"), validateNewCourse, validate, addCourseC);
kursaiRouter.route("/editCourse/:id").patch(protect, allowAccessTo("admin"), validateNewCourse, validate, editCourseC);
kursaiRouter.route("/deleteCourse/:id").delete(protect, allowAccessTo("admin"), removeCourseC);

export default kursaiRouter;