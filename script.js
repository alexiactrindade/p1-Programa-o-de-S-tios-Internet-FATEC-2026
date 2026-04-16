'use strict'

function gerarDrink(urlImagem) { 
    const galeria = document.getElementById('galeria')
    const imagem = document.createElement('img')
    imagem.src = urlImagem 

    galeria.append(imagem)
}

async function captarFotosAPI() { 
    const drink = document.getElementById('drink').value 
    const urlAPI = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    const response = await fetch(urlAPI)
    const data = await response.json()

    const galeria = document.getElementById('galeria')
    galeria.innerHTML = ''

    if (!data.drinks) {
        mostrarErro('Não contém drink com esse nome')
    } else {
        data.drinks.forEach(item => {
            gerarDrink(item.strDrinkThumb)
        })
    }
}

function mostrarErro(mensagem) {
    const galeria = document.getElementById('galeria')

    const erro = document.createElement('p')
    erro.textContent = mensagem
    erro.classList.add('erro') 

    galeria.append(erro)
}

document.getElementById('pesquisar')
        .addEventListener('click', captarFotosAPI)