import express from "express";
import { createStudentC, editStudentC, getAllStudentsC, getStudentC, removeStudentC } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/studentai", getAllStudentsC);
studentRouter.get("/studentas/:id", getStudentC);
studentRouter.post("/addStudentas", createStudentC);
studentRouter.patch("/editStudentas/:id", editStudentC);
studentRouter.delete("/deleteStudentas/:id", removeStudentC);

export default studentRouter;