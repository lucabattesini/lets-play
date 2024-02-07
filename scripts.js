function mudarPosicao() {
    var botao = document.getElementById("nao-aceita");
    var novaPosicaoX = Math.floor(Math.random() * window.innerWidth);
    var novaPosicaoY = Math.floor(Math.random() * window.innerHeight);
  
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}