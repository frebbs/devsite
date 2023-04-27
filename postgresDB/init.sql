CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       username TEXT NOT NULL UNIQUE,
                       email TEXT NOT NULL UNIQUE,
                       password TEXT NOT NULL,
                       access_level INT NOT NULL DEFAULT 10,
                       created_at TIMESTAMP DEFAULT now()
);

INSERT INTO users(username, email, password, access_level) VALUES ('diablej', 'aaron@aarondev.co.uk', '$2b$05$nXJahT6yj/zUkPMCaP6vluzZhP9p.NE1reLFz53BsKICTgqIZkD.W', 0);

