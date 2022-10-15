const express = require("express")
const { router } = require("../app/routes/router")
const cors = require("cors")

class ServidorApp {
    constructor() {
        this.server = express()
        this.middleware()
        this.router()
    }

    middleware() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    router() {
        this.server.use(router)
    }
}

module.exports = {
    ServidorApp
}