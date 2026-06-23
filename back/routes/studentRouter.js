import express from "express";
import { getAllStudentsC, getStudentC } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/studentai", getAllStudentsC);
studentRouter.get("/studentas/:id", getStudentC);

export default studentRouter;