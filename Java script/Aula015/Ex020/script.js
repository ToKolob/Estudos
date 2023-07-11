var arrayNumeros = []

function adicionar(){
    var res = document.getElementById('res')
    res.innerHTML = ""
    var numero = document.getElementById('numero')
    var lista = document.getElementById('lista')

    var num = Number(numero.value)


    if (num.length == 0 || num < 1 || num > 100) {
    window.alert("Campo invalido! Revise os dados e tente novamente")
    }

    else if (arrayNumeros.includes(num)) {
        window.alert('Numero já consta na lista')
        
    } 
    else{
        arrayNumeros.push(num)        
        var item = document.createElement('option')
        item.value = num
        item.text = `Valor ${num} adicionado.`        
        lista.appendChild(item)
        
    }
}
function finalizar() {

    if (arrayNumeros.length == 0){
        window.alert('Você ainda não adicionou números para analisar, adicione e tente novamente.')
    }
    else {           
        var soma = 0
        var maior = 0
        var menor = 100
        var media = 0

        for (var n in arrayNumeros) {
            //res.innerHTML += `${arrayNumeros[n]} <br>`
            //caso precise testar os valores inseridos

            soma += arrayNumeros[n]

            if (arrayNumeros[n] > maior) {
                maior = arrayNumeros[n]
            }
            if (arrayNumeros[n]<menor){
                menor = arrayNumeros[n]
            } 
        }

        media = soma / arrayNumeros.length

        res.innerHTML = `Ao total temos ${arrayNumeros.length} números cadastrados. <br><br>
        O maior valor é ${maior}. <br><br>
        O menor valor é ${menor}. <br><br>
        A soma é ${soma}. <br><br>
        E a média é ${media}`
    }
    
    
    
 
}