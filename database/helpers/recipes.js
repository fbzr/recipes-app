const db = require('../config');
const uuid = require('uuid');

const getAll = async () => {
    const recipes = await db.query('SELECT * FROM recipes').rows;
    const result = [];
    recipes.forEach(recipe => {
        const ingredients = await db.query('SELECT i.id, i.name FROM ingredients as i JOIN (SELECT ingredient_id, recipe_id FROM recipe_ingredients WHERE recipe_id = $1) AS ri ON ri.ingredient_id = i.id', [recipe.id]).rows;
        const instructions = await db.query('SELECT * FROM instructions WHERE recipe_id = $1', [recipe.id]).rows;
        
        result.push({
            ...recipe,
            ingredients,
            instructions
        });
    });
    return result;
}

const getById = id => {
    return db.query('SELECT * FROM recipes WHERE id = $1', [id]);
}

const add = async ({ name }) => {
    const id = uuid.v4();
    const [newRecipe] = (await db.query('INSERT INTO recipes (id, name) VALUES ($1, $2) RETURNING *', [id, name])).rows;
    return newRecipe;
}

module.exports = {
    getAll,
    getById,
    add
}