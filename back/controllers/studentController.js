import { createStudentM, deleteStudentM, getAllStudentsM, getStudentByIdM, updateStudentM } from "../model/studentModel.js";
import AppError from "../utils/appError.js";

export const getAllStudentsC = async (req, res, next) => {
  try {
    const students = await getAllStudentsM();

    res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await getStudentByIdM(id);

    if (!student) {
      throw new AppError("Student not found", 404);
    }

    res.status(200).json({
      status: "success",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

export const createStudentC = async (req, res, next) => {
  try {
    const newStudent = req.body;

    const student = await createStudentM(newStudent);

    res.status(201).json({
      status: "success",
      data: student,
    });
  } catch (error) {
    next(error);
  }
};

export const editStudentC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await getStudentByIdM(id);

    if (!existing) {
      throw new AppError("Student ID is invalid", 404);
    }

    const updated = await updateStudentM(id, req.body);

    res.status(200).json({
      status: "success",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const removeStudentC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await getStudentByIdM(id);

    if (!existing) {
      throw new AppError("Student ID is invalid", 404);
    }

    await deleteStudentM(id);

    res.status(200).json({
      status: "success",
      message: "The student has been deleted.",
    });
  } catch (error) {
    next(error);
  }
};