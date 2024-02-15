const botao = document.getElementById("nao-aceita")

document.getElementById('nao-aceitou-botao').addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - botao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - botao.offsetHeight);
    
    botao.style.left = randomX + 'px';
    botao.style.top = randomY + 'px';
  });