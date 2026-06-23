import { getAllStudentsM } from "../model/studentModel.js";

export const getAllStudentsC = async (req, res, next) => {
  try {
    const places = await getAllStudentsM();

    res.status(200).json({
      status: "success",
      data: places,
    });
  } catch (error) {
    next(error);
  }
};