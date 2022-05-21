import express from "express";
import LivroController from "../controllers/livrosController.js";

//constante para definir a rota do express
const router = express.Router();

//oque vai acontecer na rota
router
    //quando for chamada a rota get
    .get("/livros", LivroController.listarlivros)
    //quando for chamada a rota get passando a editora
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    //quando for chamada a rota get passando o id
    .get('/livros/:id', LivroController.listarLivroPorId)
    //quando for chamada a rota post
    .post("/livros", LivroController.cadastrarLivro)
    //quando for chamada a rota put
    .put("/livros/:id", LivroController.atualizarLivro)
    //quando for chamada a rota delete
    .delete('/livros/:id', LivroController.deletarLivro)

export default router;