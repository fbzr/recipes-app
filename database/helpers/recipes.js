const db = require('../config');
const uuid = require('uuid');

const getAll = async () => {
    const { rows } = await db.query('SELECT * FROM recipes');
    return rows;
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