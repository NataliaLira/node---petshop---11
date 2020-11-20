const http = require('http')
const url = require('url')

const funcoes = require('./funcoes')

let pets = [
    {
      nome: "Stark",
      raca: "SRD",
      peso: 13,
      idade: 10,
      cor: "Caramelo",
      porte: "Médio",
      sexo: "m",
      dono: "Thor Odinson",
      alergias: ["Corante Vermelho", "Frutos do mar"],
      castrado: false,
      vacinas: [
        { nome: "Antirrábica", data: "10/11/2015" },
        { nome: "BC500", data: "10/12/2015" },
      ],
    },
    {
      nome: "Ted",
      raca: "Chiahuahua",
      peso: 15,
      idade: 7,
      cor: "Creme",
      porte: "Pequeno",
      sexo: "m",
      dono: "Gabas",
      alergias: ["AAS", "AntiInflamatório"],
      castrado: true,
      vacinas: [{ nome: "BC500", data: "10/12/2015" }],
    },
  ];

const server = http.createServer((req,res) => {
    // acessando url
    let urlCompleta = url.parse(req.url, true)
    let rota = urlCompleta.pathname
    let query = urlCompleta.query

    if(rota == '/'){
        let lista = funcoes.listarPets(pets)
        res.write(lista)
    } 
    else if (rota == "/pet"){
        let qnome = query.nome
        let pet = funcoes.buscarPet(pets, qnome)
        res.write(pet.nome)
    } else {

    }

    res.end()
})
server.listen(3000, 'localhost',()=>{
    console.log("Servidor ON!")
})













//Pratica I: '
//- Criar servidor que escute na porta 3030;
//- Criar rota '/' que nos liste todos os pets
// - Criar rota '/pet' query params