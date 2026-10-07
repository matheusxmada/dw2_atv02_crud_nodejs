import express from "express";
import Favorito from "../models/Favorito.js";

const router = express.Router();


// LISTAR FAVORITOS
router.get("/favoritos", (req, res) => {

    Favorito.findAll()
        .then((favoritos) => {

            res.render("favoritos", {
                favoritos: favoritos
            });

        })
        .catch((erro) => {

            console.error(erro);

            res.send("Erro ao buscar os carros favoritos.");

        });

});


// ADICIONAR FAVORITO
router.post("/favoritos/cadastrar", (req, res) => {

    const {
        nomeCarro,
        marca,
        modelo,
        ano,
        potenciaHP
    } = req.body;

    Favorito.create({
        nomeCarro: nomeCarro,
        marca: marca,
        modelo: modelo,
        ano: ano,
        potenciaHP: potenciaHP
    })
        .then(() => {

            res.redirect("/favoritos");

        })
        .catch((erro) => {

            console.error(erro);

            res.send("Erro ao cadastrar o carro favorito.");

        });

});


// FORMULÁRIO DE EDIÇÃO
router.get("/favoritos/editar/:id", (req, res) => {

    const id = req.params.id;

    Favorito.findByPk(id)
        .then((favorito) => {

            res.render("editarFavoritos", {
                favorito: favorito
            });

        })
        .catch((erro) => {

            console.error(erro);

            res.send("Erro ao buscar o carro.");

        });

});


// EDITAR FAVORITO
router.post("/favoritos/editar/:id", (req, res) => {

    const id = req.params.id;

    const {
        nomeCarro,
        marca,
        modelo,
        ano,
        potenciaHP
    } = req.body;

    Favorito.update(
        {
            nomeCarro: nomeCarro,
            marca: marca,
            modelo: modelo,
            ano: ano,
            potenciaHP: potenciaHP
        },
        {
            where: {
                id: id
            }
        }
    )
        .then(() => {

            res.redirect("/favoritos");

        })
        .catch((erro) => {

            console.error(erro);

            res.send("Erro ao editar o carro favorito.");

        });

});


// EXCLUIR FAVORITO
router.get("/favoritos/excluir/:id", (req, res) => {

    const id = req.params.id;

    Favorito.destroy({
        where: {
            id: id
        }
    })
        .then(() => {

            res.redirect("/favoritos");

        })
        .catch((erro) => {

            console.error(erro);

            res.send("Erro ao excluir o carro favorito.");

        });

});


export default router;