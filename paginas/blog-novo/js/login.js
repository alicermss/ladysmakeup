// abrir login  
function showLogin() {
    document.getElementById("login").style.display = "flex";
}
//fechar login
function closeLogin() {
    document.getElementById("login").style.display = "none";
}

function login() {
    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;
    if (login === "ladys" && senha === "123") {
        alert("Sucesso!");
        location.href = "home.html";
    } else {
        alert("úsuarios ou senhas incorretos");
    }
}