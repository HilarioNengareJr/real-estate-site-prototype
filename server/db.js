const cradle = require('cradle');

const connection = new cradle.Connection('http://localhost', 5984, {
    cache: true,
    raw: false,
});


const dbName = 'users';

const db = connection.database(dbName);

module.exports = db;
