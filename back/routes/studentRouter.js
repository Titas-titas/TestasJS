import express from "express";
import { createStudentC, editStudentC, getAllStudentsC, getStudentC, removeStudentC } from "../controllers/studentController.js";
import { protect } from "../controllers/authController.js";
import validateNewStudent from "../validators/newStudentVal.js";
import validate from "../validators/validate.js";
import validateFilterStudents from "../validators/filterStudents.js";

const studentRouter = express.Router();

studentRouter.route("/studentai").get(protect, allowAccessTo("user", "admin"), validateFilterStudents, validate, getAllStudentsC);
studentRouter.route("/studentas/:id").get(protect, allowAccessTo("user", "admin"), getStudentC);
studentRouter.route("/addStudentas").post(protect, allowAccessTo("admin"), validateNewStudent, validate, createStudentC);
studentRouter.route("/editStudentas/:id").patch(protect, allowAccessTo("admin"), validateNewStudent, validate, editStudentC);
studentRouter.route("/deleteStudentas/:id").delete(protect, allowAccessTo("admin"), removeStudentC);

export default studentRouter;