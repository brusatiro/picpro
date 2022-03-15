// Passo a passo:

// 1. Adicionar IDs nos botões (1...4)
// 2. Selecionar os botões
// 3. Interceptar o evento de click
// 4. Recuperar o ID adicionado

// SELECIONANDO A UL
const listaOpcoes = document.querySelector(".secaoConta_transacoes")

// ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", identificarOpcoes)

// EXECUTANDO AÇÃO DEPOIS DO CLICK
function identificarOpcoes(event) {

    // IDENTIFICANDO ONDE OCORREU O CLICK
    const element = event.target

    // VERIFICANDO SE É UM LI
    if(element.tagName == "LI" || "IMG" || "P") {

        // RECUPERANDO O ID
        const id = element.id

        // SELECIONANDO UMA SEÇÃO UTILIZANDO O ID (ESCOLHA DO USUÁRIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        // REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        // ADICIONAR UMA CLASSE
        secaoEscolha.classList.add("mostrar")
    }
}

// FUNÇÃO QUE REMOVE A CLASSE MOSTRAR
function removeClasseMostrar() {

    // SELECIONANDO TODAS AS DIVS
    const divs = document.querySelectorAll(".secaoPagamentos .container div") /* o querySelectorAll retorna um array */

    for(let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("mostrar")
    }
}