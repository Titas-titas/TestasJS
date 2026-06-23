import { sql } from "../dbConnection.js";

export const getAllCoursesM = async () => {
  const courses = await sql`
    SELECT *
    FROM kursai
    ORDER BY id ASC
  `;
  return courses;
};
