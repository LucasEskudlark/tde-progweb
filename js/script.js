$(document).ready(function(){
    fLocalEventosClick();
    
});

function fLocalEventosClick() {
    document.getElementById("register-btn").onclick = function() {
        var firstName = document.getElementById("firstname").value.trim();
        var lastName = document.getElementById("lastname").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value.trim();
        var phone = document.getElementById("phone").value.trim();

        // CAMPOS VAZIOS
        if (firstName == "" || lastName == "" || email == "" || password == "" || phone == "") {
            document.getElementById("errorMessage").innerHTML = `<p>Todos os campos devem ser preenchidos!</p>`
            document.getElementById("errorMessage2").innerHTML = `<p>*Campos com erro</p>`
        } 

        // NOME
        if (firstName.length < 3) {
            document.getElementById("firstname").style.border = "1px solid #D8000C"
            document.getElementById("firstnameLabel").style.color = "#D8000C"
            document.getElementById("firstnameLabel").innerHTML = `*Nome`
        } else {
            if (firstName.length >= 3) {
                document.getElementById("firstname").style.border = "none"
                document.getElementById("firstnameLabel").style.color = "#80461B"
                document.getElementById("firstnameLabel").innerHTML = `Nome`
            }
        }

        // SOBRENOME
        if (lastName.length < 5) {
            document.getElementById("lastname").style.border = "1px solid #D8000C"
            document.getElementById("lastnameLabel").style.color = "#D8000C"
            document.getElementById("lastnameLabel").innerHTML = `*Sobrenome`
        } else {
            if (lastName.length >= 5) {
                document.getElementById("lastname").style.border = "none"
                document.getElementById("lastnameLabel").style.color = "#80461B"
                document.getElementById("lastnameLabel").innerHTML = `Sobrenome`
            }
        }

        // EMAIL
        if (!(email.includes("@"))) {
            document.getElementById("email").style.border = "1px solid #D8000C"
            document.getElementById("emailLabel").style.color = "#D8000C"
            document.getElementById("emailLabel").innerHTML = `*Email`
        } else {
            if (email.includes("@")) {
                document.getElementById("email").style.border = "none"
                document.getElementById("emailLabel").style.color = "#80461B"
                document.getElementById("emailLabel").innerHTML = `Email`
            }
        }

        // SENHA    
        if (password.length < 4) {
            document.getElementById("password").style.border = "1px solid #D8000C"
            document.getElementById("passwordLabel").style.color = "#D8000C"
            document.getElementById("passwordLabel").innerHTML = `*Senha`
        } else {
            if (password.length >= 4) {
                document.getElementById("password").style.border = "none"
                document.getElementById("passwordLabel").style.color = "#80461B"
                document.getElementById("passwordLabel").innerHTML = `Senha`
            }
        }

        // NUMERO TELEFONE
        if (phone.length != 11) {
            document.getElementById("phone").style.border = "1px solid #D8000C"
            document.getElementById("phoneLabel").style.color = "#D8000C"
            document.getElementById("phoneLabel").innerHTML = `*Telefone(com DDD)`
        } else {
            if (phone.length == 11) {
                document.getElementById("phone").style.border = "none"
                document.getElementById("phoneLabel").style.color = "#80461B"
                document.getElementById("phoneLabel").innerHTML = `Telefone(com DDD)`
            }
        }

        if (firstName.length >= 3 && lastName.length >= 5 && email.includes("@") && password.length >= 4 && phone.length == 11) {
            fLocalComunicaServidor("config")
            window.location.href = "../paginas/pag-sucesso.html";
        }

    }
}
function fLocalComunicaServidor(arquivo){

    var valores = $('#form :input').serialize();
    $.ajax({

        type:"POST",
        dataType: "json",
        data: valores,
        url: "../php/" + arquivo +".php",
        success: function(retorno){

        }
    });
}