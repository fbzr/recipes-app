CREATE DATABASE recipes;

CREATE TABLE recipes (
    id UUID PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE ingredients (
    id UUID PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE instructions (
    id UUID PRIMARY KEY,
    recipe_id UUID REFERENCES recipes(id),
    description text,
    step integer,
    UNIQUE (id, recipe_id)
);