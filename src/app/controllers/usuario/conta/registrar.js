const { UsuarioModel } = require("../../../modules/models/usuario.model")
const bcrypt = require("bcrypt")

class Registrar extends UsuarioModel {
    registrar = async (req, res) => {
        const { nome, email, senha } = req.body
        if (!nome) return res.status(404).send("Por favor, informe um nome!")
        if (!email) return res.status(404).send("Por favor, informe um email!")
        if (!senha) return res.status(404).send("Por favor, informe uma senha!")

        const criptografiaSenhaSalt = await bcrypt.genSalt(12)
        const criptografiaSenhaHash = await bcrypt.hash(senha, criptografiaSenhaSalt)

        try {
            if (String(await this.buscarContaEmail(email)).length) {
                return res.status(404).send("Email já utilizado!")
            }

            return res.status(200).json(await this.criarConta(nome, email, criptografiaSenhaHash))
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new Registrar()