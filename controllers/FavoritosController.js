// Importando o Express
import express from "express";

// Importando o Model Favorito
import Favorito from "../models/Favorito.js";

// Criando o Router
const router = express.Router();


// Listar favoritos

router.get("/favoritos", async (req, res) => {

    try {

        const favoritos = await Favorito.findAll({
            order: [["id", "DESC"]]
        });


        res.render("favoritos", {
            favoritos: favoritos
        });


    } catch (error) {

        console.log("Erro ao buscar favoritos:", error);

        res.send("Ocorreu um erro ao buscar os carros favoritos.");

    }

});


// Adicionar favoritos

router.post("/favoritos/adicionar", async (req, res) => {

    try {

        const {
            nomeCarro,
            marca,
            categoria,
            ano
        } = req.body;


        await Favorito.create({

            nomeCarro: nomeCarro,
            marca: marca,
            categoria: categoria,
            ano: ano

        });


        console.log("Carro adicionado aos favoritos!");

        res.redirect("/favoritos");


    } catch (error) {

        console.log("Erro ao adicionar favorito:", error);

        res.send("Ocorreu um erro ao adicionar o carro favorito.");

    }

});


// Editar favorito

router.post("/favoritos/editar/:id", async (req, res) => {

    try {

        const id = req.params.id;

        const {
            nomeCarro,
            marca,
            categoria,
            ano
        } = req.body;


        await Favorito.update(

            {

                nomeCarro: nomeCarro,
                marca: marca,
                categoria: categoria,
                ano: ano

            },

            {

                where: {
                    id: id
                }

            }

        );


        console.log("Favorito atualizado!");

        res.redirect("/favoritos");


    } catch (error) {

        console.log("Erro ao editar favorito:", error);

        res.send("Ocorreu um erro ao editar o favorito.");

    }

});


// Excluir favorito

router.get("/favoritos/excluir/:id", async (req, res) => {

    try {

        const id = req.params.id;


        await Favorito.destroy({

            where: {
                id: id
            }

        });


        console.log("Favorito excluído!");

        res.redirect("/favoritos");


    } catch (error) {

        console.log("Erro ao excluir favorito:", error);

        res.send("Ocorreu um erro ao excluir o favorito.");

    }

});


// Exportando o controller

export default router;