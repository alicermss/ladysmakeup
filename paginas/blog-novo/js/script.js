

// FUNÇÃO ALTO CONTRASTE//

const btnRestart = document.querySelector(".finish button");
const btnproximo = document.querySelector(".content button");
const content = document.querySelector(".content");
const textFinish = document.querySelector(".finish span");

const btnoff = document.getElementById("lampadaoff")
const btnon = document.getElementById("lampadaon")

let indiceatual = 0;
let perguntasCorretas = 0;

btnoff.style.display = "none"
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnon.style.display = "none"
    btnoff.style.display = "flex"
    btnoff.addEventListener("click", lightMode)
    element.className = "dark-mode";
    content.innerText = "Dark Mode is OFF";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    btnoff.style.display = "none";
    btnon.style.display = "flex"
    element.className = "light-mode";
    content.innerText = "Dark Mode is ON";
}

// FIM DA FUNÇÃO FO ALTO CONTRASTE


// Função para rolar de volta ao topo da página
function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

// Exibir o botão "Voltar ao Topo"
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Voltar").style.display = "flex";
    } else {
        document.getElementById("Voltar").style.display = "none";
    }
}

// abrir modal   
function showModal() {
    document.getElementById("modal").style.display = "flex";
}
//fechar modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
