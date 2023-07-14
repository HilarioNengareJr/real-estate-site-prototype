const cradle = require('cradle');

const connection = cradle.Connection({
    host: 'localhost',
    port: 5984,
    cache: true,
    raw: false,
});

const db = connection.database('users');

module.exports = db;