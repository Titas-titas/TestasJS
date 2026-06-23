CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    name VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role VARCHAR NOT NULL DEFAULT 'user'
);

-- studentas - id, vardas, pavarde, kursas
-- kursai - id, mokymo dalyko pavadinimas, kreditu skaicius
CREATE TABLE IF NOT EXISTS kursai (
    id SERIAL PRIMARY KEY,
    mokymo_dalyko_pavadinimas VARCHAR NOT NULL,
    kreditu_skaicius INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS studentai (
    id SERIAL PRIMARY KEY,
    vardas VARCHAR NOT NULL,
    pavarde VARCHAR NOT NULL,
    kursas_id INTEGER NOT NULL REFERENCES kursai(id) ON DELETE CASCADE
);