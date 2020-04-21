const { Pool } = require('pg');

const config = process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : {
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDATABASE
    }

const pool = new Pool(config);

module.exports = pool;