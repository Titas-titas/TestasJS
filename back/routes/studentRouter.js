import express from "express";
import { createStudentC, editStudentC, getAllStudentsC, getStudentC, removeStudentC } from "../controllers/studentController.js";
import { protect } from "../controllers/authController.js";
import validateNewStudent from "../validators/newStudentVal.js";
import validate from "../validators/validate.js";
import validateFilterStudents from "../validators/filterStudents.js";

const studentRouter = express.Router();

studentRouter.route("/studentai").get(protect, validateFilterStudents, validate, getAllStudentsC);
studentRouter.route("/studentas/:id").get(protect, getStudentC);
studentRouter.route("/addStudentas").post(protect, validateNewStudent, validate, createStudentC);
studentRouter.route("/editStudentas/:id").patch(protect, validateNewStudent, validate, editStudentC);
studentRouter.route("/deleteStudentas/:id").delete(protect, removeStudentC);

export default studentRouter;