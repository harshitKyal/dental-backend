var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit: 10,
    // host: "navient.in",
    // user: "MakeMeClear",
    // password: "MakeMeClear",
    // database: "MakeMeClear",
    host: "medstudyinternational.com",
    user: "d031f2d0",
    password: "makemeclear",
    database: "d031f2d0"

});

pool.getConnection((err , connection) => {
    if (err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("database connection was closed")
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error("database has to many connection")
        }
        if (err.code === 'ECONNREFUSED') {
            console.error("database connection was refused")
        }
    }
    if (connection) connection.release()    
    return
})
module.exports = pool