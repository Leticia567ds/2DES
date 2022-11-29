
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'consultorio',
    user: 'root'
});

module.exports = connection;