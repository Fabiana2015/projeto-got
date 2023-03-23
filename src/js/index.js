const botaoCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")

botaoCarrossel.forEach((botao, index)=>{
    botao.addEventListener("click", ()=>{
        desmarcarBotao();

        botao.classList.add("selecionado");

        esconderImagem();

        imagens[index].classList.add("ativa");
    })
    })

function esconderImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desmarcarBotao() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

