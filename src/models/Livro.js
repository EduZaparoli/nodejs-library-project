//importar o mongoose
import mongoose from "mongoose";

//informar que o arquivo é um esquema da tabela
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: String, required: true},
        numeroPagina: {type: Number}
    } 
);

//informar que tem uma coleção de livros e que eles vão seguir o padrão livroSchema
const livros = mongoose.model('livros', livroSchema);

export default livros;