const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "250802",
    host: "localhost",
    database: "todoapp"
});

module.exports = pool;