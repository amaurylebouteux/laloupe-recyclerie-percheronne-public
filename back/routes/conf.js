const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'recyclerie',
    password: '458763215',
    database: 'fake',
    timezone : 'local', 
    'dateStrings':[
        'DATE',"DATETIME"
    ]
});

module.exports = connection;