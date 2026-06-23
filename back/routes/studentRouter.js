import express from "express";
import { createStudentC, getAllStudentsC, getStudentC } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/studentai", getAllStudentsC);
studentRouter.get("/studentas/:id", getStudentC);
studentRouter.get("/add", createStudentC);

export default studentRouter;