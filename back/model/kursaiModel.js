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

export const createCourseM = async (course) => {
  const created = await sql`
    INSERT INTO kursai
    ${sql(course, "mokymo_dalyko_pavadinimas", "kreditu_skaicius")}
    RETURNING *
  `;
  return created[0];
};