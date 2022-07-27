// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");

// somar.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) + 1;
// })

// subtrair.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) - 1;
// })

// somar.addEventListener("click", () => {manipulaDados("somar")});

// subtrair.addEventListener("click", () => { manipulaDados("subtrair")});

// Para colocar um data atribute é entre conchetes
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})

function manipulaDados(operacao, controle) {
    // assim ele busca apena no controle o item correto para ser alterado
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
function atualizaEstatisticas(peca){
    console.log(pecas[peca]);

    estatisticas.forEach((elemento) => {
        console.log(elemento.textContent)
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    } )
}