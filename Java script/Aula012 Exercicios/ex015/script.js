function verificar() {
    var formularioAno = document.getElementById('txtano')
    var data = new Date()
//o new Date é uma função que retorna diversos valores do horario e data atual
    var ano = data.getFullYear()
    var res = document.querySelector('div#res')

    if (formularioAno.value.length == 0 || formularioAno > ano) {
        window.alert('Verifique os dados e tente novamente!')
//Esse esse teste impede que o usuario coloque um valor fora do range
    }
    else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - formularioAno.value
        res.innerHTML= `A idade é ${idade}`

        var genero = ''
        var img =document.createElement('img')
//Cria uma tag 
        img.setAttribute('id', 'foto')
//Da um atributo para a Tag, nesse caso o 'id' como sendo 'foto'

        if (sex[0].checked) {
            genero = 'homem'      
            if (idade >= 0 & idade < 12) {
                img.setAttribute('src', 'bebe menino.jpg')

            }
            else if (idade < 30) {
                img.setAttribute('src','jovem homem.jpg')

            }
            else if (idade < 50) {
                img.setAttribute('src','homem adulto.jpg')
            }
            else {
                img.setAttribute('src','homem velho.jpg')
            }
            
        }
        else if (sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 & idade < 12) {
                img.setAttribute('src', 'bebe menina.jpg')

            }
            else if (idade < 30) {
                img.setAttribute('src','mulher jovem.jpg')

            }
            else if (idade < 50) {
                img.setAttribute('src','mulher adulta.jpg')
            }
            else {
                img.setAttribute('src','mulher velha.jpg')
            }

        }
        res.innerHTML = `Genero = ${genero} com idade = ${idade}`

        res.appendChild(img)




    }

}