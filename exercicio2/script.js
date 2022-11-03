const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
};

// respostas aqui ⬇️

// Letra a
const primeiroAtorOuAtriz = filme.elenco[0]
console.log(`A) Primeiro ator ou atriz: ${primeiroAtorOuAtriz}`)

// Letra b
const ultimoAtorOuAtriz = filme.elenco[filme.elenco.length - 1]
console.log(`B) Último ator ou atriz: ${ultimoAtorOuAtriz}`)

// Letra c
const Transmissao = filme.transmissoesHoje
console.log('C) Transmissão de hoje:\n', Transmissao)

// Letra d
const horario = `O ${filme.transmissoesHoje[1].canal} começa sua transmissão as ${filme.transmissoesHoje[1].horario}.`
console.log('D)', horario)