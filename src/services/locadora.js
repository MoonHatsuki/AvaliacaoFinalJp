const ModelLocadora = require('../models/locadora')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SALT = 12

class ServiceLocadora{

    async GetClienteById(id_Cliente) {
        return ModelLocadora.findByPk(id_Cliente)
    }
    async GetClientes() {
        return ModelLocadora.findAll()
    }
    async CreateCliente(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        const hashSenha = await bcrypt.hash(password, SALT)
        return ModelLocadora.create({ name, password: hashSenha, email })
    }
    async UpdateCliente(id_Cliente, name, password, email) {
        if(!id_Cliente) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await ModelLocadora.findByPk(id_Cliente)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        cliente.name = name || cliente.name
        cliente.password = password
            ? await bcrypt.hash(password, SALT)
            : cliente.password
        cliente.email = email || cliente.email

        cliente.save()
        return cliente
    }
    async DeleteCliente(id_Cliente) {
        if(!id_Cliente) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await ModelLocadora.findByPk(id_Cliente)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        return cliente.destroy()
    }
    async GetFilmeById(id_Filme) {
        return ModelLocadora.findByPk(id_Filme)
    }
    async GetFilme() {
        return ModelLocadora.findAll()
    }
    async CreateFilme(titulo, faixa_Etaria, diretor) {
        if(!titulo || !faixa_Etaria || !diretor){
            throw new Error("Favor preencher todos os dados!")
        }
    }
    async UpdateFilme(id_Filme, titulo, faixa_Etaria, diretor) {
        if(!id_Filme) {
            throw new Error("Favor informar o Id")
        }
        const filme = await ModelLocadora.findByPk(id_Filme)
        if(!filme) {
            throw new Error("Filme não encontrado")
        }
        filme.titulo = titulo || filme.titulo
       filme.faixa_Etaria = faixa_Etaria || filme.faixa_Etaria
        filme.diretor = diretor || filme.titulo
       

        filme.save()
        return filme
    }
    async DeleteFilme(id_Filme) {
        if(!id_Filme) {
            throw new Error("Favor informar o Id")
        }
        const filme = await ModelLocadora.findByPk(id_Filme)
        if(!filme) {
            throw new Error("Filme não encontrado")
        }
        return filme.destroy()
    }
    async GetFilme_LocadoById(id_Filme_Locado) {
        return ModelLocadora.findByPk(id_Filme_Locado)
    }
    async GetFilme_locado() {
        return ModelLocadora.findAll()
    }
    async CreateFilme_locado(id_Filme, id_Cliente,data_Locacao, data_Devolucao) {
        if(!id_Filme|| !id_Cliente || !data_Locacao|| !data_Devolucao){
            throw new Error("Favor preencher todos os dados!")
        }
    }
    async UpdateFilme_Locado(id_Filme_Locado, data_Locacao, data_Devolucao) {
        if(!id_Filme_Locado) {
            throw new Error("Favor informar o Id")
        }
        const filme_Locado = await ModelLocadora.findByPk(id_Filme_Locado)
        if(!filme_Locado) {
            throw new Error("Locação não encontrada")
        }
        filme_Locado.data_Locacao = data_Locacao || filme.data_Locacao
       filme_Locado.data_Devolucao = data_Devolucao || filme.data_Devolucao
       

        filme_Locado.save()
        return filme_Locado
    }
    async DeleteFilme_locado(id_Filme_Locado) {
        if(!id_Filme_Locado) {
            throw new Error("Favor informar o Id")
        }
        const filme_Locado = await ModelLocadora.findByPk(id_Filme_Locado)
        if(!filme_Locado) {
            throw new Error("Locação não encontrada")
        }
        return filme_Locado.destroy()
    }
    async Login(email, password) {
        if(!email || !password) {
            throw new Error("Email ou senha inválido!")
        }

        const cliente = await ModelLocadora.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Email ou senha inválido!")
        }

        const senhaValida = bcrypt.compare(password, pessoa.password)

        if(!senhaValida) {
            throw new Error("Email ou senha inválido!")
        }

        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60 * 60 })
    }
    async AlugaFilme(id_Filme, id_Cliente, data_Locacao) {
        if(!id_Filme|| !id_Cliente||!data_Locacao){
            throw new Error("Favor preencher todos os dados!")
        }
        return ({msg: "Filme Locado!"})
    }
        async DevolveFilme(id_Filme, id_Cliente, data_Devolucao) {
            if(!id_Filme|| !id_Cliente ||!data_Devolucao){
                throw new Error("Favor preencher todos os dados!")
            }
            return ({msg: "Filme Devolvido!"})
        }

}
module.exports = new ServiceLocadora()