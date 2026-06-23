import { sql } from "../dbConnection.js";

//view all
export const getAllCoursesM = async () => {
  const courses = await sql`
    SELECT *
    FROM kursai
    ORDER BY id ASC
  `;
  return courses;
};

//view by id
export const getCourseByIdM = async (id) => {
  const course = await sql`
    SELECT *
    FROM kursai
    WHERE id = ${id}
  `;
  return course[0];
};

//add
export const createCourseM = async (course) => {
  const created = await sql`
    INSERT INTO kursai
    ${sql(course, "mokymo_dalyko_pavadinimas", "kreditu_skaicius")}
    RETURNING *
  `;
  return created[0];
};

//edit
export const updateCourseM = async (id, course) => {
  const updated = await sql`
    UPDATE kursai
    SET
      mokymo_dalyko_pavadinimas = ${course.mokymo_dalyko_pavadinimas},
      kreditu_skaicius = ${course.kreditu_skaicius}
    WHERE id = ${id}
    RETURNING *
  `;
  return updated[0];
};

//delete
export const deleteCourseM = async (id) => {
  await sql`
    DELETE FROM kursai
    WHERE id = ${id}
    RETURNING *
  `;
};