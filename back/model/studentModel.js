import { sql } from "../dbConnection.js";

export const getAllStudentsM = async () => {
  const students = await sql`
    SELECT *
    FROM studentai
    ORDER BY id ASC
  `;
  return students;
};