CREATE DATABASE postgres;

\l

\c postgres;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('zied', 'ziedsellami@lab5com.fr'),
    ('sellami', 'test@test.com');

select * from users;
