# INFORMAÇÕES DO PROJETO 

## API UTILIZADA

No trabTheCocktailDB API é uma base de dados aberta e colaborativa (crowd-sourced) que oferece uma API gratuita para acessar receitas, ingredientes e imagens de coquetéis de todo o mundo. 

https://www.thecocktaildb.com/api.php 
Link usado no código com interpolação: https://www.thecocktaildb.com/api/json/v1/1/search.php?s= 

## Como o código funciona? 

Na função gerarDrink(urlImagem) são atribuídas 3 variáveis. 

1 - const galeria = documento.getElementById('galeria') 

ID do DIV do HTML é guardado na variável para ser usado posteriormente na inserção da imagem, indicando ONDE ela será adicionada (no div que corresponde a galeria) 

2 - const imagem = document.createElement('img') 
Cria uma imagem vazia que, posteriormente, será preenchida com o parâmetro urlImagem na linha imagem.src = urlImagem. Importante reforçar que o parâmetro urlImagem será dado pelo item.strDrinkThumb na função "captarFotosAPI()" 

Linha código galeria.append(imagem) vai inserir a imagem na galeria, com a url recebida na url imagem. 

A função captarFotosAPI() é uma função async. Ou seja, ela permite executar tarefas demoradas (como o request do await aguardando a promise do API) sem travar a execução do código. Essa função possui as variáveis const drink = document.getElementById('drink').value 

Essa pega o valor digitado pelo usuário no input do HTML consT url API = https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink} Indica onde será feita a requisição da API. Com a interpolação, será de acordo com o que o usuário digitou. 

const response = await fetch (urlAPI) Faz a requisição da API, usando o await esperar pelo promise sem travar o código. 

const data = await response.json A API retorna com um texto (vetor) e esse texto é convertido para um objeto através do JSON. 

const galeria = document.getElementById('galeria') 
galeria.replaceChildren () 
apaga a galeria, quando outro drink é digitado pelo usuário. 

if(!data.drinks) { mostrarErro ('não conteém drink com esse nome') 
} else { data.drinks.forEach(item => { gerar Drink(item.strDrinkThumb )

Basicamente, um if/else. Se não há drink, de acordo com o que o usuário digitou, vai mostrar uma mensagem de erro. No if, data.drink é nulo, e nulo é automaticamente atribuído como falso. A exclamação vai retornar o valor como verdadeiro. Caso tenha o drink digitado pelo usuário, o vetor será percorrido e para cada elemento, será criado um item com atribuição da url. Esse valor retornará como parâmetro na função gerarDrink.

A função mostrarErro(mensagem) é responsável por exibir um feedback para o usuário quando não existe nenhum drink com o nome pesquisado. Nela, eu seleciono a galeria, crio um elemento <p>, insiro a mensagem de erro e adiciono uma classe para estilização. Por fim, esse elemento é inserido na tela. Ou seja, em vez de deixar a interface vazia ou confusa, o código trata o erro de forma clara e visível.

Já o addEventListener('click', captarFotosAPI) é o que conecta tudo com a interação do usuário. Ele fica “escutando” o botão de pesquisa e, quando ocorre o clique, dispara a função responsável por buscar os dados na API.

## Detalhes de estilização 

No CSS, quis desenvolver algo simples, baseado no buscador do Google. Através do Gemini, gerei a logo "DRINKS" que foi inserido no código HTML por meio da imagem drinks-logo.png. Quando a imagem é gerada, toda vez que o mouse passa, o :hover aumenta o brilho da foto. 

## 🔗 Acesse o Projeto

- 💻 GitHub: [https://github.com/alexiactrindade/p1-Programa-o-de-S-tios-Internet-FATEC-2026)]
- 🌐 GitHub Pages: [https://alexiactrindade.github.io/p1-Programa-o-de-S-tios-Internet-FATEC-2026/]

## 📢 Post no LinkedIn

Confira a publicação sobre este projeto:

👉 [https://www.linkedin.com/posts/alexiatrindade_neste-trabalho-integrei-uma-api-p%C3%BAblica-ugcPost-7450880591417241600-J_2b?utm_source=share&utm_medium=member_desktop&rcm=ACoAABwCSFoB9u_k3xvFkQjCKN2OoFRtv6UW4ys]

---

## 👨‍🏫 Disciplina

**Programação de Sítios Internet**  
Prof. Fernando Leonid – 2026

---

Critérios
## ✅ Critérios

Foi criado o campo de busca? (0,5)  - SIM 
Os cards são criados dinamicamente? (1,5)  - SIM
- [ ] Os cards são criados dependendo da busca? (1,5)  - SIM
- [ ] Foi utilizado métodos para criar os novos elementos HTML? (1,5)  - SIM
- [ ] O consumo de API foi feito usando o fetch()? (1,5)  - SIM
- [ ] Incluiu tratamento de erro no campo de busca? (0,5)  - SIM
- [ ] Está responsivo? (1,0)  - SIM
- [ ] Foi criado o README com informações do projeto? (1,0)  - SIM
- [ ] Foi habilitado o GitHub Pages? (0,5)  - SIM
- [ ] Foi publicado no LinkedIn? (0,5)  - SIM
