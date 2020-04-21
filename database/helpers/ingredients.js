const db = require('../config');
const uuid = require('uuid');

const getAll = async () => {
    return (await db.query('SELECT * FROM ingredients')).rows;
}

const getById = async id => {
    const ingredient = await db.query('SELECT * FROM ingredients WHERE id = $1', [id]);
    return ingredient.rows.length ? ingredient.rows[0] : null;
}

const getByName = async name => {
    const ingredient = await db.query('SELECT * FROM ingredients WHERE name = $1', [name]);
    return ingredient.rows.length ? ingredient.rows[0] : null;
}

const add = async name => {
    const id = uuid.v4();
    const [ingredient] = (await db.query('INSERT INTO ingredients(id, name) VALUES ($1, $2) RETURNING *', [id, name])).rows;
    return ingredient;
}

const addToRecipe = async (ingredient_id, recipe_id) => {
    const id = uuid.v4();
    const response = await db.query('INSERT INTO recipe_ingredients(id, recipe_id, ingredient_id) VALUES ($1, $2, $3) RETURNING *', [id, recipe_id, ingredient_id]);

    return response.rows[0];
}

const getByRecipe = async recipe_id => {
    const ingredients = await db.query('SELECT i.id, i.name FROM ingredients as i JOIN (SELECT ingredient_id, recipe_id FROM recipe_ingredients WHERE recipe_id = $1) AS ri ON ri.ingredient_id = i.id', [recipe_id]);
    return ingredients.rows;
}

module.exports = {
    getAll,
    getById,
    getByName,
    add,
    getByRecipe,
    addToRecipe
}