const { dbQuery } = require("../../../config/DB/bancoDeDados")

class UsuarioModel {
    buscarContaEmail = async (email) => {
        try {
            return await dbQuery('SELECT * FROM Usuario WHERE email = $1', [email])
        } catch (error) {
            return error
        }
    }

    criarConta = async (nome, email, senha) => {
        try {
            await dbQuery('INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha])
            return this.buscarContaEmail(email)
        } catch (error) {
            return error
        }
    }
}

module.exports = { UsuarioModel }