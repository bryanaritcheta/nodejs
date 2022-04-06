require('dotenv').config()
var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: process.env.mysqluser,
    password: process.env.mysqlpassword,
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE customers";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table deleted");
    });
});