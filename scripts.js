const botao = document.getElementById("nao-aceita")
const aceitou = document.getElementById("aceita")

document.getElementById('nao-aceitou-botao').addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - botao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - botao.offsetHeight);
    
    botao.style.left = randomX + 'px';
    botao.style.top = randomY + 'px';
  });

aceitou.addEventListener("click", () => {
    console.log("Obrigado por aceitar")
})
