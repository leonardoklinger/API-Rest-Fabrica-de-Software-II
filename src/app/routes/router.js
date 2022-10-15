const { Router } = require("express")
const { login, registrar } = require("../controllers/")
const { middleware } = require("../middleware/middleware")

const router = Router()

router.get("/", (req, res) => {
    res.status(200).send("Servidor online")
})

router.post("/login", login)
router.post("/registrar", registrar)
router.get("/teste", middleware, (req, res) => {
    res.status(200).send("Logado com sucesso")
})

module.exports = {
    router
}