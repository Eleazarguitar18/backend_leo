const express= require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/products', (req,res) =>{
    res.send('obteniendo productos')
})

app.post('/products', (req,res) =>{
    res.send('creando productos')
})

app.put('/products', (req,res) =>{
    res.send('actulizando productos')
})

app.delete('/products', (req,res) =>{
    res.send('eliminando productos')
})

app.get('/products/:id', (req,res) =>{
    res.send('obteniendo un producto')
})

app.listen(3000)
console.log(`server port ${3000}`)