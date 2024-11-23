const ServiceLocadora = require('../services/locadora')

class ControllerLocadora {
    async GetSession(req, res) {
        try {
            const id_Cliente = req.session.id_Cliente
            const pessoa = await ServiceLocadora.GetClienteById(id_Cliente)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async GetClientes(req, res) {
        try {
            const clientes = await ServiceLocadora.GetClientes()
            res.send({ msg: clientes })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async CreateCliente(req,res){
        try {
            const { name, password, email } = req.body

            const cliente = await ServiceLocadora
                .CreateCliente(name, password, email)
            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async UpdateCliente(req,res){
        try {
            const id_Cliente = req.params.id_Cliente
            const name = req.body.name
            const password = req.body.password
            const email = req.body.email

            const cliente = await ServiceLocadora
                .UpdateCliente(id_Cliente, name, password, email)

            res.send({ msg: cliente })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
    async DeleteCliente(req,res){
        try {
            const id_Cliente = req.params.id_Cliente
            await ServiceLocadora.DeleteCliente(id_Cliente)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
async GetSession(req, res) {
    try {
        const id_Filme = req.session.id_Filme
        const filme = await ServiceLocadora.GetFilmeById(id_Filme)
        res.send({ msg: filme })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async GetFilme(req, res) {
    try {
        const filmes = await ServiceLocadora.GetFilme()
        res.send({ msg: filmes })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async CreateFilme(req,res){
    try {
        const { titulo, faixa_Etaria, diretor } = req.body

        const filme = await ServiceLocadora
            .CreateFilme(titulo, faixa_Etaria, diretor)
        res.send({ msg: filme })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async Updatefilme(req,res){
    try {
        const id_Filme = req.params.id_Filme
        const titulo = req.body.titulo
        const faixa_Etaria = req.body.faixa_Etaria
        const diretor = req.body.diretor

        const filme = await ServiceLocadora
            .UpdateFilme(id_Filme, titulo, faixa_Etaria, diretor)

        res.send({ msg: filme })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async DeleteFilme(req,res){
    try {
        const id_Filme = req.params.id_Filme
        await ServiceLocadora.DeleteFilme(id_Filme)
        res.status(204).send()
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async GetSession(req, res) {
    try {
        const id_Filme_Locado = req.session.id_Filme_Locado
        const filme = await ServiceLocadora.GetFilmes_locadosById(id_Filme_Locado)
        res.send({ msg: filmes_Locados })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async GetFilmes_Locados(req, res) {
    try {
        const filmes_Locados = await ServiceLocadora.GetFilmes_Locados()
        res.send({ msg: filmes_Locados })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async CreateFilme_Locado(req,res){
    try {
        const { data_Locacao, data_Devolucao } = req.body

        const filmes_Locados = await ServiceLocadora
            CreateFilme_Locado(data_Locacao, data_Devolucao)
        res.send({ msg: filmes_Locados })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async Updatefilmes_Locados(req,res){
    try {
        const id_Filme_Locado = req.params.id_Filme_Locado
        const id_Filme = req.params.id_Filme
        const id_Cliente = req.params.id_Cliente
        const data_Locacao = req.body.data_Locacao
        const data_Devolucao = req.body.data_Devolucao

        const filmes_Locados = await ServiceLocadora
            .UpdateFilme_Locado(id_Filme_Locado, id_Filme, id_Cliente, data_Locacao, data_Devolucao)

        res.send({ msg: filmes_Locados })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async DeleteFilme_Locado(req,res){
    try {
        const id_Filme_Locado = req.params.id_Filme_Locado
        await ServiceLocadora.DeleteFilme_locado(id_Filme_Locado)
        res.status(204).send()
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async Login(req, res) {
    try {
        const { email, password } = req.body
        const token = await ServiceLocadora.Login(email, password)
        res.status(200).send({ token })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async alugar_Filme(req,res){
    try {
        const { id_Filme, id_Cliente, data_Locacao} = req.body

        const aluguel = await ServiceLocadora
            this.alugar_Filme(id_Filme, id_Cliente, data_Locacao)
        res.send({ msg: aluguel })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
async devolver_Filme(req,res){
    try {
        const { id_Filme, id_Cliente, data_Devolucao} = req.body

        const devolucao = await ServiceLocadora
            this.devolver_Filme(id_Filme,id_Cliente, data_Devolucao)
        res.send({ msg: aluguel })
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
}
module.exports = new ControllerLocadora()