const database = require('../config/database')

class ModelCliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id_Cliente: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
class ModelFilmes {
    constructor() {
        this.model = database.db.define('filmes', {
            id_Filme: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            faixaEtaria: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            diretor: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}
class ModelFilmes_locados {
    constructor() {
        this.model = database.db.define('filmes_locados', {
            id_Filme_Locado: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            id_Filme: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true
            },
            id_Cliente: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true
            },
            data_Locacao: {
                type: database.db.Sequelize.DATE
            },
            data_Devolucao: {
                type: database.db.Sequelize.DATE,
                unique: true
            }
        })
    }
}
module.exports = new ModelCliente().model