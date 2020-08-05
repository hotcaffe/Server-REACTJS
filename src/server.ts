import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// MÉTODOS HTTP
// GET - Consultar alguma informação 
// POST - Criar alguma informação
// PUT - Atualizar alguma informação
// DELETE - Deletar alguma informação

//app.get/post/put/delete

// CORPO - Dados para criação ou atualização de um registro
// Route parms - Identificar qual recurso eu quero atualizar ou deletar
// Query parms - Paginação, filtros, ordenação.


//localhost:3333/users

app.listen(3333);