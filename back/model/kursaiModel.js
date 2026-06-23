import { sql } from "../dbConnection.js";

export const getAllCoursesM = async () => {
  const courses = await sql`
    SELECT *
    FROM kursai
    ORDER BY id ASC
  `;
  return courses;
};

export const getCourseByIdM = async (id) => {
  const course = await sql`
    SELECT *
    FROM kursai
    WHERE id = ${id}
  `;
  return course[0];
};