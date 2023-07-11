//Os arrays são as lista do Python!

let numeros = [1,4,6,7.2,0]
console.log(`temos aqui o seguinte vetor ${numeros}` )

//saída: temos aqui o seguinte vetor 1,4,6,7.2,0

//Agora vamos ver um atributo e um metodo, o atributo usa apenas o "." já o metodo usa ". e ()"

//atributo >> numero.sort que põe em ordem so itens da arrray

numeros.sort
console.log(`usando o atributo "sort" ${numeros}`)

//saída: usando o atributo "sort" 1,4,6,7.2,0

//e agora usando o metodo "push()" para adicionar um valor a ultima key do array

numeros.push(2)
console.log(`usando o metodo "push()" temos ${numeros}`)

//saída: usando o metodo "push()" temos 1,4,6,7.2,0,2

//também é possivel adicionar sem usar o metodo

numeros[6] = 8
console.log(`sem metodo ${numeros}` )

//saída: sem metodo 1,4,6,7.2,0,2,8

//também usamos o colchete para imprimir um item em uma key especifica, ou index.

console.log(numeros[3])

//saída: 7.2

//outro atributo é o "length" para poder ver o tamanho do array

console.log(`O array numeros tem o length ${numeros.length} porém o ultimo index é [6] pois começa pela key 0. 

Ou seja o Vetor numeros tem ${numeros.length} posições!`)

/*O array numeros tem o length 7 porém o ultimo index é [6] pois começa pela key 0. 

Ou seja o Vetor numeros tem 7 posições!*/

//agora para imprimirmos todos os valores do array ou vetor vamos usa uma extrutura de repetição

for (let pos = 0; pos <= numeros.length; pos ++) {
    console.log(`O elemento ${pos} possui o valor ${numeros[pos]}`)
}

/*saída:O elemento 0 possui o valor 1
O elemento 1 possui o valor 4
O elemento 2 possui o valor 6
O elemento 3 possui o valor 7.2
O elemento 4 possui o valor 0
O elemento 5 possui o valor 2
O elemento 6 possui o valor 8
O elemento 7 possui o valor undefined*/

//como o index 7 não tem valor, retornou "undefined".

//mas a estrutura "for" pode ser usada diferente para arrays e objetos.

for (let pos in numeros) {
    console.log(`usando o "for" com o "in" O elemento ${pos} possui o valor ${numeros[pos]}`)
}

/* saída: 
usando o "for" com o "in" O elemento 0 possui o valor 1
usando o "for" com o "in" O elemento 1 possui o valor 4
usando o "for" com o "in" O elemento 2 possui o valor 6
usando o "for" com o "in" O elemento 3 possui o valor 7.2
usando o "for" com o "in" O elemento 4 possui o valor 0
usando o "for" com o "in" O elemento 5 possui o valor 2
usando o "for" com o "in" O elemento 6 possui o valor 8
*/

//Agora vamos buscar um valor dentro do array usando o método ".indexOf()"

console.log(`${numeros.indexOf(7.2)}`) 

//saída: 3

//Ele retorna o index do valor buscado

console.log(`${numeros.indexOf(3)}`)

//saída: -1

//como não existe o valor 3 no array ele retorna -1 por não exitir o valor em nenhuma index
