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

ALTER TABLE recipes
    ADD COLUMN image_url VARCHAR(255);

-- Indexes
CREATE INDEX idx_recipes_id ON recipes(id);
CREATE INDEX idx_ingredients_id ON ingredients(id);
CREATE INDEX idx_instructions_id ON instructions(id);
CREATE INDEX idx_instructions_recipe_id ON instructions(recipe_id);
CREATE INDEX idx_recipe_ingredients_id ON recipe_ingredients(id);
CREATE INDEX idx_recipe_ingredients_recipe_id ON recipe_ingredients(recipe_id);
CREATE INDEX idx_recipe_ingredients_ingredient_id ON recipe_ingredients(ingredient_id);