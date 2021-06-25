
// Criar uma porta
// Criar rota
// HTTP request
// Enviar response


const express = require("express") // importando express

const app = express() // colocando express disponível para ser usado no arquivo instanciado

app.get("/", (request, response) => {
    console.log("uma requisição foi feita")
    response.status(200).json("Salve")
})



app.listen(8080, () =>{
    console.log("Meu primeiro servidor rodando na porta 8080")
})