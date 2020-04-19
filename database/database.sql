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
    recipe_id UUID NOT NULL REFERENCES recipes(id),
    description text,
    step integer,
    UNIQUE (id, recipe_id)
);

CREATE TABLE recipe_ingredients (
    id UUID PRIMARY KEY,
    recipe_id UUID NOT NULL REFERENCES recipes(id),
    ingredient_id UUID NOT NULL REFERENCES ingredients(id),
    quantity VARCHAR(255),
    UNIQUE (recipe_id, ingredient_id)
);