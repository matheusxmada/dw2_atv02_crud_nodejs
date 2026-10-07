import { DataTypes } from "sequelize";
import connection from "../config/sequelize-config.js";

const Favorito = connection.define("Favorito", {

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

    modelo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    potenciaHP: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    tableName: "favoritos",
    timestamps: false
});

export default Favorito;