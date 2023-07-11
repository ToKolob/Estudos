function calcular() {
    var numero = document.getElementById('numero')
    var n = Number(numero.value)
    var tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0){
        window.alert('Error')
    }
    else {
        tabuada.innerHTML = ' '
        for (c = 1; c <=10; c++){


            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}` 
            tabuada.appendChild(item)
        }

        
    }
    
}