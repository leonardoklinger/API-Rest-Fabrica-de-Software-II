const { UsuarioModel } = require("../../../modules/models/usuario.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class Login extends UsuarioModel {
    login = async (req, res) => {
        const { email, senha } = req.body
        if (!email) return res.status(404).send("Por favor, informe um email!")
        if (!senha) return res.status(404).send("Por favor, informe uma senha!")

        try {
            const usuarioExistente = await this.buscarContaEmail(email)
            if (!String(usuarioExistente).length) {
                return res.status(404).send("Usuário não encontrado!")
            }

            const checkarSenha = await bcrypt.compare(senha, usuarioExistente[0].senha)
            if (!checkarSenha) {
                return res.status(401).send("Senha inválida!")
            } else {
                const token = jwt.sign({ email: usuarioExistente[0].email, }, "$1$rbxvfvnk$8uK6M.0p/va9fuUzzBhCn/", {
                    expiresIn: "10h"
                })
                return res.status(200).json({ mensagem: "Autenticado com sucesso", token: token })
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new Login()