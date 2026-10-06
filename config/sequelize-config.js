// Arquivo de configuração do Sequelize, com os dados de conexão com o banco.
// Importando o Sequelize
import Sequelize from "sequelize";

const connection = new Sequelize({
    // Dados de conexão
    dialect: 'mysql', // dialect é o tipo de banco
    host: 'localhost', // 127.0.0.1 host é o local onde o banco será rodado
    username: 'root',
    password: '', // Sem senha
    database: 'loja',
    timezone: "-03:00", // Fuso horário de Brasília, indica o horário do banco de dados
});// Instanciando o objeto. connection herda todos os atributos do Sequelize.

// Exportando o módulo
export default connection;