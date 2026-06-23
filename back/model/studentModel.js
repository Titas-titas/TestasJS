import { sql } from "../dbConnection.js";

export const getAllStudentsM = async (filters) => {
  const { vardas, pavarde, kursas_id, sort, order } = filters;

  const students = await sql`
    SELECT 
      studentai.id,
      studentai.vardas,
      studentai.pavarde,
      studentai.kursas_id,
      kursai.mokymo_dalyko_pavadinimas,
      kursai.kreditu_skaicius
    FROM studentai
    JOIN kursai ON studentai.kursas_id = kursai.id
    WHERE 1=1
    ${vardas ? sql`AND studentai.vardas ILIKE ${"%" + vardas + "%"}` : sql``}
    ${pavarde ? sql`AND studentai.pavarde ILIKE ${"%" + pavarde + "%"}` : sql``}
    ${kursas_id ? sql`AND studentai.kursas_id = ${kursas_id}` : sql``}
    ORDER BY 
      ${
        sort
          ? sql`${sql.unsafe(`studentai.${sort}`)}`
          : sql`studentai.id`
      }
      ${order ? sql.unsafe(order) : sql`ASC`}
  `;

  return students;
};

export const getStudentByIdM = async (id) => {
  const student = await sql`
    SELECT 
      studentai.id,
      studentai.vardas,
      studentai.pavarde,
      studentai.kursas_id,
      kursai.mokymo_dalyko_pavadinimas,
      kursai.kreditu_skaicius
    FROM studentai
    JOIN kursai ON studentai.kursas_id = kursai.id
    WHERE studentai.id = ${id}
  `;

  return student[0];
};

export const createStudentM = async (student) => {
  const newStudent = await sql`
    INSERT INTO studentai
    ${sql(student, "vardas", "pavarde", "kursas_id")}
    RETURNING *
  `;
  return newStudent[0];
};

export const updateStudentM = async (id, student) => {
  const updated = await sql`
    UPDATE studentai
    SET
      vardas = ${student.vardas},
      pavarde = ${student.pavarde},
      kursas_id = ${student.kursas_id}
    WHERE id = ${id}
    RETURNING *
  `;
  return updated[0];
};

export const deleteStudentM = async (id) => {
  const deleted = await sql`
    DELETE FROM studentai
    WHERE id = ${id}
    RETURNING *
  `;
  return deleted[0];
};