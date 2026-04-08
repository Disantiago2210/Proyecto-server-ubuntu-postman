const express = require('express');
const app = express();

const verificarApiKey = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const usuariosRouter = require('./routes/usuarios');

app.use(express.json());

app.use('/usuarios', verificarApiKey, usuariosRouter);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando' });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
