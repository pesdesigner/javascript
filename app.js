// Funções do jogo

//ajustar tamanho da tela
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

//níveis do jogo
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1200
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 1000
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

//ajustar tamanho da tela
ajustaTamanhoPalcoJogo()

//cronometro
var cronometro = setInterval(function(){

    document.getElementById('cronometro').innerHTML = tempo
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

//posição aleatória das mosquitos
function posicaoRandomica() {

            //remover o mosquito anterior ( caso exista )
            if(document.getElementById('mosquito')) {
                document.getElementById('mosquito').remove()

            //console.log('elemento selecionado foi: v' + vidas)
            if(vidas > 3) {
                 window.location.href = 'fim-de-jogo.html'
            } else {
                document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
                vidas++
            }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

//criar o elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())

}

//tamanho aleatorio do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
        return 'mosquito1'
        case 1:
        return 'mosquito2'
        case 2:
        return 'mosquito3'

    }
}


//mosquito sprite perfil
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
        return 'ladoA'
        case 1:
        return 'ladoB'

    }
}
