const db = require('../config');
const uuid = require('uuid');

const getAll = async () => {
    return await db.query('SELECT * FROM ingredients').rows;
}

const getById = async id => {
    return await db.query('SELECT * FROM ingredients WHERE id = $1', [id]).rows;
}

const add = async ({ name }) => {
    const id = uuid.v4();
    const [ingredient] = (await db.query('INSERT INTO ingredients(id, name) VALUES ($1, $2) RETURNING *', [id, name])).rows;
    return ingredient;
}

module.exports = {
    getAll,
    getById,
    add
}