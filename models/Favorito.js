// Importando o Sequelize
import { DataTypes } from "sequelize";

// Importando a conexão
import connection from "../config/sequelize-config.js";


// Criando o Model Favorito
const Favorito = connection.define("favoritos", {

    id: {

        type: DataTypes.INTEGER,

        primaryKey: true,

        autoIncrement: true

    },


    nomeCarro: {

        type: DataTypes.STRING(100),

        allowNull: false

    },


    marca: {

        type: DataTypes.STRING(100),

        allowNull: false

    },


    categoria: {

        type: DataTypes.STRING(100),

        allowNull: true

    },


    ano: {

        type: DataTypes.INTEGER,

        allowNull: true

    }

});


// Exportando o Model
export default Favorito;