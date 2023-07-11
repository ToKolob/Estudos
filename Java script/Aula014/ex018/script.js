

function contar() {
    var txinicio = document.getElementById('inicio')
    var txfim = document.getElementById('fim')
    var txpassos = document.getElementById('passos')
    var resposta = document.getElementById('resposta')

    var contagem = ''

    if (txinicio.value.length == 0 || txfim.value.length == 0 || txpassos.value.length == 0) {
        resposta.innerHTML = 'Verifique os dados e tente novamente.'
    }

    else {
        if (Number(txfim.value) > Number(txinicio.value)) {
            for (var c = Number(txinicio.value); c <= Number(txfim.value) ; c += Number(txpassos.value)){
                contagem +=  ` ${c} \u{1f449}`
            }
        }
        else{
            for (var c = Number(txinicio.value); c >= Number(txfim.value); c -= Number(txpassos.value)){

                contagem += ` ${c} \u{1f449} `

            }
        }        
        contagem += `\u{1f3c1}`
        resposta.innerHTML = contagem
    }
}
