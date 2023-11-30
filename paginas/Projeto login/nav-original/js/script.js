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

