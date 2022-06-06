import livros from '../models/Livro.js'

class LivroController{
    static listarLivros = (req, res) =>{
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao buscar o livros`})
            }else{
                res.status(200).send(livros)

            }
        })
    }

    static listarLivrosPorId = (req, res) =>{
        const {id} = req.params
        livros.findById(id)
        .populate('autor', 'nome')
        .exec( (err, livro) =>{
            if(err){
                res.status(400).send({message: `${err.message} - falha ao buscar o livro`})
            }else{
                res.status(200).send(livro)
            }
        })
    }

    static cadastrarLivro = (req, res) =>{
        let livro = new livros(req.body);
        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizaLivro = (req, res) =>{
        const {id} = req.params

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar o livro`})
            }else{
                res.status(201).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }

    static excluirLivro = (req, res) =>{
        const {id} = req.params

        livros.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao excluir o livro`})
            }else{
                res.status(200).send({message: 'Livro excluido com sucesso'})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) =>{
        const editora = req.query.editora
        livros.find({'editora':editora}, {}, (err, livros) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao buscar o livro pr editora`})
            }else{
                res.status(200).send(livros)
            }
            
        })
    }

}

export default LivroController