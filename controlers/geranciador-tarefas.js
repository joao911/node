const uuidv4 = require('uuid/v4');

let tarefas = [
    { id: '1', nome: 'aprender react', concluida: true },
    { id: '2', nome: 'deixar o fatiador de frios na vea', concluida: false },
    { id: '3', nome: 'Aprender javaScript', concluida: false },
    { id: '4', nome: 'estudar recat usando hooks', concluida: false }
];

function listarTarefasId(req, res){
    const id = req.params.id;
    const tarefa = tarefas.filter(tarefa => tarefa.id === id);
    if(tarefa.length === 0){
        res.status(404).json({erro: 'Tarefa não encontrada.'});
    }
    res.json(tarefa[0])
}
module.exports = {
    listarTarefasId
}