import { query } from "express-validator";

const allowedSortFields = [
  "vardas",
  "pavarde",
  "id",
  "kursas_id",
  "mokymo_dalyko_pavadinimas",
];

const allowedOrder = ["ASC", "DESC"];

const validateFilterStudents = [
  query("vardas")
    .optional()
    .isString()
    .withMessage("vardas must be a string")
    .trim(),

  query("pavarde")
    .optional()
    .isString()
    .withMessage("pavarde must be a string")
    .trim(),

  query("kursas_id")
    .optional()
    .isInt({ min: 1 })
    .withMessage("kursas_id must be a positive integer"),

  query("sort")
    .optional()
    .custom((value) => {
      if (!allowedSortFields.includes(value)) {
        throw new Error(
          "sort must be one of: " + allowedSortFields.join(", ")
        );
      }
      return true;
    }),

  query("order")
    .optional()
    .custom((value) => {
      if (!allowedOrder.includes(value)) {
        throw new Error("order must be ASC or DESC");
      }
      return true;
    }),
];

export default validateFilterStudents;