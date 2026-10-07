// Importando o Sequelize
import { DataTypes } from "sequelize";

// Importando a conexão com o banco de dados
import sequelize from "../config/sequelize-config.js";

// Criando o Model Cliente
const Cliente = sequelize.define("Cliente", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    telefone: {
        type: DataTypes.STRING(20),
        allowNull: true
    }

}, {

    tableName: "clientes",

    timestamps: false

});

// Exportando o Model Cliente
export default Cliente;