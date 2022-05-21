//importa o mongoose para conectar o db
import mongoose from "mongoose";

//conectar o db com o projeto
mongoose.connect("mongodb+srv://Compass:1204@cluster0.6n4bo.mongodb.net/alura-node");

//variavel para usar a conexão
let db = mongoose.connection;

//exportar o arquivo para usar em outro arquivo
export default db;