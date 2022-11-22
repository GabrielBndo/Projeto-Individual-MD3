const express = require("express");
const { response } = require("express");
const { uuid } = require("uuidv4"); // id unico
const port = process.env.PORT || 8181;

const app = express();
app.use(express.json());
const produtos = require("./src/produtos/bd.json");

app.get("/produtos", (request, response) => {
  return response.json(produtos);
}); //visualizar
app.post("/add", (request, response) => {
  const { marca, modelo, memoria, imagem } = request.body; // nome das rotas
  const placas = { id: uuid(), marca, modelo, memoria, imagem };
  placas.push(placas);
  return response.status(201).json(placas);
}); //inserir
app.put("/placas/:id", (request, response) => {
  const { id } = request.params;
  const { marca, modelo, memoria, imagem } = request.body;
  const newplacas = { id, marca, modelo, memoria, imagem };
  const placasindex = placas.findIndex((placas) => placas.id == id);
  placas[placasindex] = newplacas;
  return response.json(newplacas);
}); //atualizar
app.delete("/placas/:id", (request, response) => {
  const { id } = request.params;
  const placasindex = placas.findIndex((placas) => placas.id == id);
  placas.splice(placasindex, 1);
  return response.status(204).send();
}); //excluir

app.listen(8181, () => {
  console.log("O servidor foi iniciado");
});
