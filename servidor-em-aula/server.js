//importando o express para o documento
const express = require("express")

//intanciando o express
const app = express()

//Importando arquivo JSON de estados
const estados = require("./data/estados-cidades.json")

app.get("/estados/todos", (request, response)=>{
    response.status(200).send(estados)
})
app.get("/estados/:sigla", (request, response) => {
    const siglaRequisitada = estados.filter(resposta => resposta.sigla == request.params.sigla)
    response.status(200).send(siglaRequisitada)
})

//Definindo uma porta para o servidor local através de uma função anônima
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})