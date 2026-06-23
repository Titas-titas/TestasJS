import express from "express";
import { createStudentC, editStudentC, getAllStudentsC, getStudentC } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/studentai", getAllStudentsC);
studentRouter.get("/studentas/:id", getStudentC);
studentRouter.get("/addStudentas", createStudentC);
studentRouter.get("/editStudentas/:id", editStudentC);


export default studentRouter;