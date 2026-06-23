import { getAllCoursesM } from "../model/kursaiModel.js";

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
