import { createCourseM, getAllCoursesM, getCourseByIdM } from "../model/kursaiModel.js";

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

