import livros from "../models/Livro.js";

class LivroController{
    
    //metodo para listar todos os livros
    static listarlivros = (req, res) => {
        //encontrar os livros
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
            //devolver os livros em formato json
            res.status(200).json(livros);
        })
    }
    
    //metodo para cadastrar um novo livro
    static cadastrarLivro = (req, res) => {
        //indicação para criar um novo livro
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro!`});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        //constante que recebe o id que vem na requisição
        const id = req.params.id;

        //metodo busca Pelo Id e Atualiza(findByIdAndUpdate)
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro foi atualizado com sucesso'});
            }else{
                res.status(500).send({message: `${err.message} - falha ao atualizar livro!`});
            }
        })
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(!err){
                res.status(200).send(livros);
            }else{
                res.status(400).send({message: `${err.message} - Livro não encontrado!`});
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro excluido'});
            }else{
                res.status(500).send({message: `${err.message} - Não foi possivel excluir o livro!`});
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora;
        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }

}

export default LivroController;