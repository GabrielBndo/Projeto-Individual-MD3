const express = require('express')
const { response } = require('express')
const { uuid } = require('uuidv4')//id unico


const app = express()
app.use(express.json())
const placas = []
const ssd = []
const memoria = []



//---------------------------------------placas---------------------------------------------//

app.get('/placas', (request, response) => {
    return response.json(placas)
})//Visualizar
app.post('/placas', (request, response) => {
    const { marca, modelo, memoria, imagem } = request.body
    const video = { id: uuid(), marca, modelo, memoria, imagem }
    placas.push(video)
    return response.status(201).json(video)

})//inserir
//put atualiza
app.put('/placas/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, memoria, imagem } = request.body
    const newplacas = { id, marca, modelo, memoria, imagem }
    const videoindex = placas.findIndex(video => video.id == id)
    placas[videoindex] = newplacas;
    return response.json(newplacas)
})
//delete apaga
app.delete('/placas/:id', (request, response) => {
    const { id } = request.params
    const videoindex = placas.findIndex(video => video.id == id)
    placas.splice(videoindex, 1)
    return response.status(204).send()
})


app.listen(8181, () => {
    console.log('O Servidor foi iniciado!')
})


///------------------ssd-----------------------------------//

app.get('/ssd', (request, response) => {
    return response.json(ssd)
})//Visualizar
app.post('/ssd', (request, response) => {
    const { marca, modelo, memoria, loja} = request.body
    const video = { id: uuid(), marca, modelo, memoria, loja}
    ssd.push(video)
    return response.status(201).json(video)

})//inserir
//put atualiza
app.put('/ssd/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, memoria, loja} = request.body
    const newssd = { id, marca, modelo, memoria, loja}
    const videoindex = ssd.findIndex(video => video.id == id)
    ssd[videoindex] = newssd;
    return response.json(newssd)
})
//delete apaga
app.delete('/ssd/:id', (request, response) => {
    const { id } = request.params
    const videoindex = ssd.findIndex(video => video.id == id)
    ssd.splice(videoindex, 1)
    return response.status(204).send()
})

//----------------------------------------------------memoria--------------------//

app.get('/memoriaram', (request, response) => {
    return response.json(memoriaram)
})//Visualizar
app.post('/memoriaram', (request, response) => {
    const { marca, modelo, capacidade, loja, velocidade, tipo } = request.body
    const video = { id: uuid(), marca, modelo, capacidade, loja, velocidade, tipo }
    memoriaram.push(video)
    return response.status(201).json(video)

})//inserir
//put atualiza
app.put('/memoriaram/:id', (request, response) => {
    const { id } = request.params
    const { marca, modelo, capacidade, loja, velocidade, tipo } = request.body
    const newmemoriaram = { id, marca, modelo, capacidade, loja, velocidade, tipo }
    const videoindex = memoriaram.findIndex(video => video.id == id)
    memoriaram[videoindex] = newmemoriaram;
    return response.json(newmemoriaram)
})
//delete apaga
app.delete('/memoriaram/:id', (request, response) => {
    const { id } = request.params
    const videoindex = memoriaram.findIndex(video => video.id == id)
    memoriaram.splice(videoindex, 1)
    return response.status(204).send()
})