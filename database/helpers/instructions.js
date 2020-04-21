const uuid = require('uuid');
const db = require('../config');

const getByRecipe = async recipe_id => {
    const instructions = (await db.query('SELECT * FROM instructions WHERE recipe_id = $1', [recipe_id])).rows;
    return instructions;
}

const add = async (description, recipe_id) => {
    const id = uuid.v4();
    const step = (await getByRecipe(recipe_id)).length + 1;
    const [instruction] = (await db.query('INSERT INTO instructions(id, description, recipe_id, step) VALUES ($1, $2, $3, $4) RETURNING *', [id, description, recipe_id, step])).rows;
    return instruction;
}

module.exports = {
    getByRecipe,
    add
}