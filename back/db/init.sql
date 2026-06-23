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

INSERT INTO kursai (mokymo_dalyko_pavadinimas, kreditu_skaicius) VALUES
('Programavimo pagrindai', 6),
('Duomenų bazės', 5),
('Objektinis programavimas', 6),
('Tinklalapių kūrimas', 4),
('Matematika kompiuterijoje', 5);

INSERT INTO studentai (vardas, pavarde, kursas_id) VALUES
('Jonas', 'Jonaitis', 1),
('Petras', 'Petraitis', 1),
('Lina', 'Pavardenė', 2),
('Mantas', 'Kazlauskas', 3),
('Gabrielė', 'Smiltytė', 4),
('Andrius', 'Rimkus', 5),
('Eglė', 'Žilinskaitė', 2);
