const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'recyclerie',
    password: '123',
    database: 'recyclerie',
    timezone : 'local', 
    'dateStrings':[
        'DATE',"DATETIME"
    ]
});

module.exports = connection;