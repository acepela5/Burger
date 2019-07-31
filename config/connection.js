var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err) {
        console.log("error coneccting: "+err.stack);
        return;
    }
    console.log("Connected ID: ", connection.threadId)
});

module.exports = connection;