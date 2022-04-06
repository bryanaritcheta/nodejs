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
    //Return 5 customers, starting from position 2:
    con.query("SELECT * FROM customers LIMIT 2, 5", function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});