const mysql = require("mysql2")
const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect((err) => {
    if (err) return console.log(err);
    console.log('conectou!');
})

async function connect(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) return reject(err)
            resolve(result)
        });
    })
}

module.exports = {
    connect
}