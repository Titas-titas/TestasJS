import { createCourseM, deleteCourseM, getAllCoursesM, getCourseByIdM, updateCourseM } from "../model/kursaiModel.js";
import AppError from "../utils/appError.js";

export const getAllCoursesC = async (req, res, next) => {
  try {
    const courses = await getAllCoursesM();

    res.status(200).json({
      status: "success",
      data: courses,
    });
  } catch (error) {
    next(error);
  }
};

export const getCourseC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const course = await getCourseByIdM(id);

    if (!course) {
      throw new AppError("Course not found", 404);
    }

    res.status(200).json({
      status: "success",
      data: course,
    });
  } catch (error) {
    next(error);
  }
};

export const addCourseC = async (req, res, next) => {
  try {
    const newCourse = req.body;

    const created = await createCourseM(newCourse);

    res.status(201).json({
      status: "success",
      data: created,
    });
  } catch (error) {
    next(error);
  }
};

export const editCourseC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await getCourseByIdM(id);

    if (!existing) {
      throw new AppError("Course ID is invalid", 404);
    }

    const updated = await updateCourseM(id, req.body);

    res.status(200).json({
      status: "success",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const removeCourseC = async (req, res, next) => {
  try {
    const { id } = req.params;

    const existing = await getCourseByIdM(id);

    if (!existing) {
      throw new AppError("Course ID is invalid", 404);
    }

    await deleteCourseM(id);

    res.status(200).json({
      status: "success",
      message: "The course has been deleted.",
    });
  } catch (error) {
    next(error);
  }
};