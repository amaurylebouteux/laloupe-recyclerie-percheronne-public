const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'recyclerie',
    timezone : 'local', 
    'dateStrings':[
        'DATE',"DATETIME"
    ]
});

module.exports = connection;