import { sql } from "../dbConnection.js";

export const getAllStudentsM = async () => {
  const students = await sql`
    SELECT *
    FROM studentai
    ORDER BY id ASC
  `;
  return students;
};

export const getStudentByIdM = async (id) => {
  const student = await sql`
    SELECT *
    FROM studentai
    WHERE id = ${id}
  `;
  return student[0];
};