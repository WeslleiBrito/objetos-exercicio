const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

// Letra a
const pokemon2 = {
    ...pokemon1
}

pokemon2.nome = 'Squirtle'
pokemon2.tipo = 'Água'

// Letra b
pokemon1['ataque'] = []

// Letra c
const tipoAtaque1 = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}

// Letra c 2
pokemon1.ataque.push(tipoAtaque1)
pokemon2['ataque'] = [...pokemon1.ataque]

// Letra d
const tipoAtaque2 = {
    nome: 'Folha navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}

pokemon1.ataque.push(tipoAtaque2)

// Letra e
const tipoAtaque3 = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
}

pokemon2.ataque.push(tipoAtaque3)

console.log('Pokemon 1', pokemon1, '\n')
console.log('Pokemon 2', pokemon2, '\n')