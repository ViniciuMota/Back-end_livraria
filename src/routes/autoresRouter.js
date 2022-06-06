import express from "express";

import AutorController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores', AutorController.listarAutoresPorId)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizaAutor)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router