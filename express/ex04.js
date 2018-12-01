const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('lista de clientes'))
    .post((req, res) => res.send('Cadastro Cliente'))
    .put((req, res) => res.send('Alterar Clinete'))
    .delete((req, res) => res.send('Remove Cliente'))

//Servidor
server.listen(3000, () => console.log('Executando...'))