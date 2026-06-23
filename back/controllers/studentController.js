import { getAllStudentsM, getStudentByIdM } from "../model/studentModel.js";

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

export const getStudentC = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await getStudentByIdM (id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};