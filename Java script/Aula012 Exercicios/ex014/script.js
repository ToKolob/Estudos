
function  carregar() {
    var mensagem = document.getElementById('mensagem')
    var img = window.document.getElementById('img')
    var agora = new Date()
    var horas = agora.getHours()
    







    mensagem.innerHTML = `São ${horas} horas`
    if (horas < 18 && horas >= 12) {
        mensagem.innerHTML = `Boa tarde, são ${horas} horas.`
        img.src = 'tarde edit.png'
        document.body.style.backgroundColor= 'orange'

    }
    else if (horas >= 6 && horas < 12 ) {
        mensagem.innerHTML = `Bom dia. são ${horas} horas.`
        document.body.style.backgroundColor = 'lightgreen'
    }
    else {
        mensagem.innerHTML = `Boa noite, são ${horas} horas.`
        document.body.style.backgroundColor = 'darkblue'
    }
}