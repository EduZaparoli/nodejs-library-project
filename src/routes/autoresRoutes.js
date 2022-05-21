import express from "express";
import AutorController from "../controllers/autoresController.js";

//constante para definir a rota do express
const router = express.Router();

//oque vai acontecer na rota
router
    //quando for chamada a rota get
    .get("/autores", AutorController.listarAutores)
    //quando for chamada a rota post
    .post("/autores", AutorController.cadastrarAutor)
    //quando for chamada a rota put
    .put("/autores/:id", AutorController.atualizarAutor)
    //quando for chamada a rota get passando o id
    .get('/autores/:id', AutorController.listarAutorPorId)
    //quando for chamada a rota delete
    .delete('/autores/:id', AutorController.deletarAutor)

export default router;