// Arquivo principal do back-end

// Importações

// Importando o Express
import express from "express";

// Importando a conexão com o banco de dados
import connection from "./config/sequelize-config.js";

// Importando os dados dos eventos dos carros
import audiEventos from "./data/audiEventos.js";
import deltaEventos from "./data/deltaEventos.js";
import subaruEventos from "./data/subaruEventos.js";
import stratosEventos from "./data/stratosEventos.js";
import peugeotEventos from "./data/peugeotEventos.js";

// Importando os Controllers
import ClienteController from "./controllers/ClienteController.js";
import FavoritosController from "./controllers/FavoritosController.js";


// Criando o express

const app = express();


// Configurações do express

// Configurando o EJS
app.set("view engine", "ejs");

// Configurando os arquivos estáticos
// CSS, imagens e arquivos JavaScript
app.use(express.static("public"));

// Configurando o Express para receber dados de formulários
app.use(express.urlencoded({ extended: false }));


// Conexão com o banco de dados

connection.authenticate()
  .then(() => {

    console.log(
      "Conexão com o banco de dados foi realizada com sucesso!"
    );

  })
  .catch((error) => {

    console.log(
      `Ocorreu um erro ao se conectar com o banco de dados. Erro: ${error}`
    );

  });


// Criando o banco de dados caso não exisat

const DB_NAME = "loja";

connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME};`)
  .then(() => {

    console.log(`O banco de dados ${DB_NAME} está criado!`);

  })
  .catch((error) => {

    console.log(
      `Ocorreu um erro ao criar o banco de dados. Erro: ${error}`
    );

  });


// Controllers

// Inicianlizando as rotas de Cliente
app.use(ClienteController);

// Inicializando as rotas de Favoritos
app.use(FavoritosController);

import Favorito from "./models/Favorito.js";

// Rotas principais

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.render("index");
});


// ROTA SOBRE
app.get("/about", (req, res) => {
  res.render("about");
});


// ROTA CONTATO
app.get("/contact", (req, res) => {
  res.render("contact");
});


// ROTA FAQ
app.get("/faq", (req, res) => {
  res.render("faq");
});


// ROTA PRIVACIDADE
app.get("/privacy", (req, res) => {
  res.render("privacy");
});


// ROTA CRÉDITOS
app.get("/credits", (req, res) => {
  res.render("credits");
});


// ROTA OUTROS
app.get("/other", (req, res) => {
  res.render("other");
});


// Rotas dos carros

// ROTA DOS CARDS DOS CARROS
app.get("/cars", (req, res) => {
  res.render("cars");
});


// ROTA DO AUDI QUATTRO
app.get("/AudiQuattro", (req, res) => {

  res.render("carros/AudiQuattro", {
    audiEventos: audiEventos
  });

});


// ROTA DO LANCIA DELTA
app.get("/LanciaDelta", (req, res) => {

  res.render("carros/LanciaDelta", {
    deltaEventos: deltaEventos
  });

});


// ROTA DO SUBARU IMPREZA
app.get("/SubaruImpreza", (req, res) => {

  res.render("carros/SubaruImpreza", {
    subaruEventos: subaruEventos
  });

});


// ROTA DO LANCIA STRATOS
app.get("/LanciaStratos", (req, res) => {

  res.render("carros/LanciaStratos", {
    stratosEventos: stratosEventos
  });

});


// ROTA DO PEUGEOT 205
app.get("/Peugeot205", (req, res) => {

  res.render("carros/Peugeot205", {
    peugeotEventos: peugeotEventos
  });

});


// Iniciando o servidor

const port = 3001;

app.listen(port, (error) => {

  // Tratando erros de inicialização
  if (error) {

    console.log(
      `Ocorreu um erro ao iniciar o servidor. Erro: ${error}`
    );

  } else {

    console.log(
      `Servidor iniciado com sucesso em: http://localhost:${port}`
    );

  }

});


// Criando tabela no MySQL
connection.sync()
    .then(() => {

        console.log("Tabelas sincronizadas com sucesso!");

    })
    .catch((error) => {

        console.log("Erro ao sincronizar as tabelas:", error);

    });