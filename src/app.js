//importar o framework express
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

//criar a conexão com o db, caso aconteça algum erro
db.on("error", console.log.bind(console, 'Erro de conexão'));

//abrir a conexão com o db, caso de certo
db.once("open", () => {
    console.log("Conexão bem sucedida");
})

//constante que recebe uma instancia do express
const app = express();

//vai interpretar oque chega via POST ou PUT e transforma em objeto
app.use(express.json());

//direcionar as rotas
routes(app);

//exportar o arquivo para usar no server
export default app;