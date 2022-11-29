const { connect } = require("../../../config/DB/bancoDeDados")

class UsuarioModel {
    buscarContaEmail = async (email) => {
        try {
            return await connect('SELECT * FROM Usuario WHERE email = ?', [email])
        } catch (error) {
            return error
        }
    }

    criarConta = async (nome, email, senha) => {
        try {
            await connect('INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha])
            return this.buscarContaEmail(email)
        } catch (error) {
            return error
        }
    }
}

module.exports = { UsuarioModel }

module.exports = { UsuarioModel }