const sacolao = [];

const listaDeFrutas = [
    { nome: 'Manga', preco: 1, disponibilidade: true },
    { nome: 'Abacaxi', preco: 2.5, disponibilidade: true },
    { nome: 'Melancia', preco: 10, disponibilidade: false },
]


for (var i = 0; i < 3; i++) {
    sacolao.push(listaDeFrutas[i])
}

console.log(sacolao)