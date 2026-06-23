import express from "express";
import { getAllStudentsC } from "../controllers/studentController.js";

const StudentRouter = express.Router();

StudentRouter.get("/studentai", getAllStudentsC);

export default StudentRouter;