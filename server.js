import app from './src/app.js'; //importar o arquivo app.js

//acessar a porta no ambiente de produção ou a porta fixa 3000
const port = process.env.PORT || 3000;

//lincar a porta que vai escutar a req e mandar a res
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})