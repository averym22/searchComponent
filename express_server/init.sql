CREATE TABLE units (
    id SERIAL PRIMARY KEY,
    name varchar NOT NULL,
    location varchar NOT NULL,
    size integer NOT NULL
);

INSERT INTO units (name, location, size) 
    VALUES ('NRO', 'Virginia', 2000), 
           ('AETC', 'San Antonio', 4000), 
           ('SMC', 'Los Angeles', 6000);