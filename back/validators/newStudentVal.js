import { body } from "express-validator";

const validateNewStudent = [
  body()
    .notEmpty()
    .withMessage("Request body must contain data"),

  body("vardas")
    .notEmpty()
    .withMessage("Vardas is required")
    .isString()
    .withMessage("Vardas must be a string")
    .trim(),

  body("pavarde")
    .notEmpty()
    .withMessage("Pavarde is required")
    .isString()
    .withMessage("Pavarde must be a string")
    .trim(),

  body("kursas_id")
    .notEmpty()
    .withMessage("Kursas ID is required")
    .isInt({ min: 1 })
    .withMessage("Kursas ID must be a positive integer"),
];

export default validateNewStudent;