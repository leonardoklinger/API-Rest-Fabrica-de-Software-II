const jwt = require("jsonwebtoken")

class middleware {
    middleware(req, res, next) {
        const header = req.headers["authorization"]
        const token = header && header.split(" ")[1]

        if (!token) return res.status(400).send("Por favor, informe um token!")

        jwt.verify(token, "$1$rbxvfvnk$8uK6M.0p/va9fuUzzBhCn/", (err) => {
            if (err) {
                return res.status(401).send("Acesso não autorizado!")
            }
            return next()
        });
    }
}

module.exports = new middleware()