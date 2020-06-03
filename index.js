const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {  listarTarefasId} = require('./controlers/geranciador-tarefas');



const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());

function naoImplementado(req, res){
    res.status(501).json({erro:'nesta sexta feira não temos role então vc vai fica em casa estudando'})
}
// get, put, delete, post
// listar todas a tarefas - get
app.get('/gerenciador-tarefas', naoImplementado);
// listar uma tarefa por id - get
app.get('/gerenciador-tarefas/:id', listarTarefasId);
// cadastrar uma tarefa - post
app.post('/gerenciador-tarefas', naoImplementado);
// atualizar uma tarefa - put
app.put('/gerenciador-tarefas/:id', naoImplementado)
// remover uma tarefa -delete
app.delete('/gerenciador-tarefas/:id', naoImplementado)
// concluir uma terefa - put
app.put('/gerenciador-tarefas/:id/concluir', naoImplementado)

app.listen(port, () => console.log(`Sextou com S de servidor pq não tem mais balada ${port}`));