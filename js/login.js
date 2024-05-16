var body = document.querySelector("body")
var singUpButton = document.querySelector("#singUp")
var singInButton = document.querySelector("#singIn")

body.onload = function(){
    body.className = "on-load";
}

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
});

singInButton.addEventListener("click", function(){
    body.className = "sing-in"
});

document.getElementById("register").addEventListener("click", function(event){
    event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional
    
    // Obtém os valores dos campos do formulário
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmedPassword = document.getElementById("confirmedPassword").value;

    // Cria um objeto com os dados do formulário
    var formData = {
        email: email,
        password: password,
        confirmedPassword: confirmedPassword
    };

    // Envia os dados para a API
    fetch("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Exibe a resposta da API no console
        // Aqui você pode manipular a resposta da API conforme necessário
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
});


document.getElementById("access").addEventListener("click", function(event){
    event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional
    
    // Obtém os valores dos campos do formulário
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;

    // Cria um objeto com os dados do formulário
    var formData = {
        email: email,
        password: password
    };

    // Envia os dados para a API
    fetch("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        window.location.href = "dashboard.html";

        // Exibe a resposta da API no console
        // Aqui você pode manipular a resposta da API conforme necessário
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
    });
});