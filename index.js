const express = require('express')
const routersLocadora = require('./src/routes/locadora')
const database = require('./src/config/database')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use("/locadora", routersLocadora)
const PORT = 3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })