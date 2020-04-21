const db = require('../config');
const uuid = require('uuid');

const getAll = async () => {
    const recipes = await db.query('SELECT * FROM recipes');
    return recipes.rows;
}

const getById = async id => {
    const recipe = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);
    return recipe.rows.length ? recipe.rows[0] : null;
}

const add = async name => {
    const id = uuid.v4();
    const newRecipe = await db.query('INSERT INTO recipes (id, name) VALUES ($1, $2) RETURNING *', [id, name]);
    return newRecipe.rows[0];
}

const getIngredients = async recipe_id => {
    const ingredients = await db.query('SELECT i.id, i.name FROM ingredients as i JOIN (SELECT ingredient_id, recipe_id FROM recipe_ingredients WHERE recipe_id = $1) AS ri ON ri.ingredient_id = i.id', [recipe_id]);
    return ingredients.rows;
}

const hasIngredient = async (recipe_id, ingredient_id) => {
    const result = await db.query('SELECT * FROM recipe_ingredients WHERE recipe_id = $1 AND ingredient_id = $2', [recipe_id, ingredient_id]);
    return result.rows.length > 0;
}

module.exports = {
    getAll,
    getById,
    add,
    getIngredients,
    hasIngredient
}