// Codar o sistema de um petshop
// petshop que receba execute as seguintes funções
// vacinarPet, castrarPet, adicionarPet, darBanhoPet, listarPet
function vacinarPet(pet, vacina) {
    // ela vai adicionar uma nova vacina (cheque como é a estrutura do atributo vacinas)
    // cada vacina deve ser um objeto que contem atributos nome e data
    // não vá apagar as vacinas anteriores!
  }
  function castrarPet(pet) {
    // se o pet não for castrado castre o pet
    // se o pet for castrado mande uma mensagem de
    // "esse pet já é castrado, não posso castra-lo de novo"
  }
  // function adicionarPet(nome, raca, peso, idade, cor, etc)
  function adicionarPet(pet) {
    // você pode tanto passar um objeto inteiro do pet
    // ou construir o objeto na função
    // ele vai receber um objeto pet para ser adicionado
    // seguindo a estrutura dos pets dentro do array pets
    // não vá apagar os pets já existentes!
  }
  function darBanhoPet(pet) {
    // retorna a mensagem "o NomeDoPet tomou banho hoje"
  }
  function listarPets(pets) {
    // recebe um array de pets e listas todos os pets do sistema (com nome, raca e dono)
    let lista = ""
    pets.forEach( (pet) => {
      lista += " | "
      lista += pet.nome 
    })
    return lista
  }

  function buscarPet(pets, nome){
    let resultado = ""
    let find = pets.find( (pet, nPosicao) =>  { return pets[nPosicao].nome == nome} )
    console.log(find);
    return resultado
  }

module.exports = {listarPets, buscarPet}