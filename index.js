const http = require('http')

const funcoes = require('./funcoes')

// http.createServer((req,res) => {

// }).listen(3000, 'localhost',()=>{
//     console.log("Servidor ON!")
// })


const server = http.createServer((req,res) => {

})
server.listen(3000, 'localhost',()=>{
    console.log("Servidor ON!")
})

//Pratica I: '
//- Criar servidor que escute na porta 3030;
//- Criar rota '/' que nos liste todos os pets
// - Criar rota '/pet' query params