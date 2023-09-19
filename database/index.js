const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "bsmqo82l7sjx9tz22ija-mysql.services.clever-cloud.com", 
    user: "u6obtub9i440ti6m", 
    password: "tXwr5Ti54cnd4MgwSXo6",
    database: "bsmqo82l7sjx9tz22ija",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, conn) => {
    if(err) console.log(err)
    console.log("Connected successfully")
})

module.exports = pool.promise()