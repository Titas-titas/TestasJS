import express from "express";
import { createStudentC, editStudentC, getAllStudentsC, getStudentC, removeStudentC } from "../controllers/studentController.js";
import { protect } from "../controllers/authController.js";
import validateNewStudent from "../validators/newStudentVal.js";
import validate from "../validators/validate.js";

const studentRouter = express.Router();

studentRouter.route("/studentai").get(protect, getAllStudentsC);
studentRouter.route("/studentas/:id").get(protect, getStudentC);
studentRouter.route("/addStudentas").post(protect, validate, validateNewStudent, createStudentC);
studentRouter.route("/editStudentas/:id").patch(protect, editStudentC);
studentRouter.route("/deleteStudentas/:id").delete(protect, removeStudentC);

export default studentRouter;