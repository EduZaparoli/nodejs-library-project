import autores from "../models/Autor.js";

class AutorController{
    
    //metodo para listar todos os autores
    static listarAutores = (req, res) => {
        //encontrar os autores
        autores.find((err, autores) => {
            //devolver os autores em formato json
            res.status(200).json(autores);
        })
    }
    
    //metodo para cadastrar um novo Autor
    static cadastrarAutor = (req, res) => {
        //indicação para criar um novo Autor
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor!`});
            }else{
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        //constante que recebe o id que vem na requisição
        const id = req.params.id;

        //metodo busca Pelo Id e Atualiza(findByIdAndUpdate)
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor foi atualizado com sucesso'});
            }else{
                res.status(500).send({message: `${err.message} - falha ao atualizar Autor!`});
            }
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(!err){
                res.status(200).send(autores);
            }else{
                res.status(400).send({message: `${err.message} - Autor não encontrado!`});
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor excluido'});
            }else{
                res.status(500).send({message: `${err.message} - Não foi possivel excluir o Autor!`});
            }
        })
    }

}

export default AutorController;