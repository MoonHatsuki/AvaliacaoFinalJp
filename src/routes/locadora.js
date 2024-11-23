const express = require('express')
const controllerLocadora = require('../controllers/locadora')
const auth = require("../middleware/auth")

const router = express.Router()

router.post('/', controllerPessoa.CreatePessoa)
router.post('/login', controllerPessoa.Login)
router.post('/getCliente', controllerLocadora.GetClientes)
router.post('/criaCliente', controllerLocadora.CreateCliente)
router.post('/updCliente', controllerLocadora.UpdateCliente)
router.post('/delCliente', controllerLocadora.DeleteCliente)

router.post('/getFilme', controllerLocadora.GetFilmes)
router.post('/criaCliente', controllerLocadora.CreateFilme)
router.post('/updCliente', controllerLocadora.Updatefilme)
router.post('/delCliente', controllerLocadora.DeleteFilme)

router.post('/getLocacao', controllerLocadora.GetFilmes_Locados)
router.post('/criaLocacao', controllerLocadora.CreateFilme_Locado)
router.post('/updLocacao', controllerLocadora.Updatefilmes_Locados)
router.post('/delLocacao', controllerLocadora.DeleteFilme_Locado)

//router.post('/filmes/locar', controllerLocadora.)
//router.post('/filmes/devolver', controllerLocadora.)


router.get('/', auth, controllerLocadora.GetClientes)
router.get('/session', auth, controllerPessoa.GetSession)
router.put('/:id_Cliente', auth, controllerLocadora.UpdateCliente)
router.put('/:id_Filme', auth, controllerLocadora.Updatefilme)
router.put('/:id_filme_Locado', auth, controllerLocadora.Updatefilmes_Locados)
router.delete('/:id_Cliente', auth, controllerLocadora.DeleteCliente)
router.delete('/:id_Filme', auth, controllerLocadora.DeleteFilme)
router.delete('/:id_Filme_Locado', auth, controllerLocadora.DeleteFilme_Locado)

module.exports = router