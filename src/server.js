/* importar o módulo do framework express */
const express = require('express');

/* importar o módulo do path */
const path = require('path');

/* importar as views */
const pages = require('./pages.js');

/* iniciar express */
const server = express();

server
    /* utilizar req do body */
    .use(express.urlencoded({extended: true}))
    /* configurando template engine Handlebars hbs */
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, "views"))
    
    /* arquivos estaticos css, js... */
    .use(express.static('public'))
    
    /* criando rotas */
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

/* ligar servidor a porta */
server.listen(5500);