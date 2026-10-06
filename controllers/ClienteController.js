// Importando o Express
import express from "express";

// Importando o Model Cliente
import Cliente from "../models/Cliente.js";

// Criando o Router
const router = express.Router();


// Listar clientess

router.get("/clientes", async (req, res) => {

    try {

        const clientes = await Cliente.findAll();

        res.render("clientes", {
            clientes: clientes
        });

    } catch (error) {

        console.log("Erro ao buscar clientes:", error);

        res.send("Ocorreu um erro ao buscar os clientes.");

    }

});


// formulário de cadastro

router.get("/clientes/cadastrar", (req, res) => {

    res.render("cadastrarCliente");

});


// Cadastrar cliente

router.post("/clientes/cadastrar", async (req, res) => {

    try {

        const {
            nome,
            email,
            telefone
        } = req.body;


        await Cliente.create({

            nome: nome,
            email: email,
            telefone: telefone

        });


        res.redirect("/clientes");

    } catch (error) {

        console.log("Erro ao cadastrar cliente:", error);

        res.send("Ocorreu um erro ao cadastrar o cliente.");

    }

});


// Formulário de edição

router.get("/clientes/editar/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const cliente = await Cliente.findByPk(id);


        if (!cliente) {

            return res.send("Cliente não encontrado.");

        }


        res.render("editarCliente", {
            cliente: cliente
        });

    } catch (error) {

        console.log("Erro ao buscar cliente:", error);

        res.send("Ocorreu um erro ao buscar o cliente.");

    }

});


// Editar cliente

router.post("/clientes/editar/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const {
            nome,
            email,
            telefone
        } = req.body;


        await Cliente.update(

            {
                nome: nome,
                email: email,
                telefone: telefone
            },

            {
                where: {
                    id: id
                }
            }

        );


        res.redirect("/clientes");

    } catch (error) {

        console.log("Erro ao editar cliente:", error);

        res.send("Ocorreu um erro ao editar o cliente.");

    }

});


// Excluir cliente

router.get("/clientes/excluir/:id", async (req, res) => {

    try {

        const id = req.params.id;


        await Cliente.destroy({

            where: {
                id: id
            }

        });


        res.redirect("/clientes");

    } catch (error) {

        console.log("Erro ao excluir cliente:", error);

        res.send("Ocorreu um erro ao excluir o cliente.");

    }

});


// Exportando o controller

export default router;