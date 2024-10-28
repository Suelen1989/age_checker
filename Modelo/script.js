function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/menino10anos.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './images/homem20anos.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './images/homem40anos.jpg')
            } else {
                img.setAttribute('src', './images/homem70anos.jpg')
            }
             document.body.style.background = '#0357bf'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './images/menina10anos.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './images/mulher20anos.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './images/mulher40anos.jpg')
            } else {
                img.setAttribute('src', './images/mulher60anos.jpg')
            }
            document.body.style.background = '#e01391'
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
       
    }
}
