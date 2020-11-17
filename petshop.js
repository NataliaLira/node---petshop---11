// pratica individual
// - criar index.js
// - separar funções em módulos
// - index.js executa as funções
// - npm init (inicializar o npm)

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
  console.log(pets[0].vacinas);