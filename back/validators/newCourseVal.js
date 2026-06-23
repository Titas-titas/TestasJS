import { body } from "express-validator";

const validateNewCourse = [
  body()
    .notEmpty()
    .withMessage("Request body must contain data"),

  body("mokymo_dalyko_pavadinimas")
    .notEmpty()
    .withMessage("Course name is required")
    .isString()
    .withMessage("Course name must be a string")
    .trim(),

  body("kreditu_skaicius")
    .notEmpty()
    .withMessage("Credit count is required")
    .isInt({ min: 1 })
    .withMessage("Credit count must be a positive integer"),
];

export default validateNewCourse;