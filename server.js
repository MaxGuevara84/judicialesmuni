const express = require ('express')
const mysql = require ('mysql')
const myconn = require ('express-myconnection')

const routes = require ('./routes')

const app = express()
app.set('port', process.env.PORT || 4600)
const dbOptions={
    host: '192.168.5.152',
    port: 4600,
    username: 'kevinm',
    password: 'Kevin.2021',
    database: 'db_sem',
}
// middlewares--------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json)

// routes -------------------------
app.get('/', (req, res) => {
    res.send('API Listarreclamos')
})
app.use('/listar', routes)

// server running ---------------------
app.listen(app.get('port'), ()=> {
    console.log('Servidor corriendo en el puerto', app.get('port'))
})