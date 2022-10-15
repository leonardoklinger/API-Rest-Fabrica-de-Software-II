const { ServidorApp } = require("./src/config/app")

class Servidor extends ServidorApp {
    constructor() {
        super()
        this.porta = process.env.PORT || 3000
    }

    ligar() {
        this.server.listen(this.porta, () => {
            console.log(`Api ligada com sucesso na porta ${this.porta}`)
        })
    }
}

new Servidor().ligar()