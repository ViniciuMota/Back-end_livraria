import autores from '../models/Autor.js'

class AutorController{
    static listarAutores = (req, res) =>{
        autores.find((err, autores) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao buscar o autores`})
            }else{
                res.status(200).send(autores)

            }
        })
    }

    static listarAutoresPorId = (req, res) =>{
        const {id} = req.params
        autores.findById(id, (err, Autor) =>{
            if(err){
                res.status(400).send({message: `${err.message} - falha ao buscar o Autor`})
            }else{
                res.status(200).send(Autor)
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizaAutor = (req, res) =>{
        const {id} = req.params

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao atualizar o Autor`})
            }else{
                res.status(201).send({message: 'Autor atualizado com sucesso'})
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const {id} = req.params

        autores.findByIdAndDelete(id, (err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao excluir o Autor`})
            }else{
                res.status(200).send({message: 'Autor excluido com sucesso'})
            }
        })
    }
}

export default AutorController