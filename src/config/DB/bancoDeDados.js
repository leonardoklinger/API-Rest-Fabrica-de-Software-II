/* const sqlite3 = require("sqlite3")
const caminhoDB = "./src/config/DB/bancoDeDados.db"

class db {
    constructor() {
        this.db = new sqlite3.Database(caminhoDB, (err) => {
            if (err) {
                console.log("Banco de Dados desconectado", err)
            } else {
                console.log("Banco de Dados conectado")
            }
        })
    }

    query = (query, params) => {
        return new Promise((resolve, reject) => {
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    reject(err)
                }

                resolve(rows)
            })
        }).finally(() => {
            this.db.close()
        })
    }
} */

const sqlite3 = require("sqlite3")
const caminhoDB = "./src/config/DB/bancoDeDados.db"

exports.openConnection = () => {
    let db = new sqlite3.Database(caminhoDB)
    return db
}

exports.dbQuery = (query, params) => {
    let db = this.openConnection();
    return new Promise((resolve, reject) => {

        db.all(query, params, (err, rows) => {
            if (err)
                reject(err);
            else
                resolve(rows);
        })

    }).finally(() => {
        db.close();
    })
}

/* const db = () => {
    return open({
        filename: "./src/config/DB/bancoDeDados.db",
        driver: sqlite3.Database
    })
} */

/* module.exports = { db } */