function hide(){
    var validarEmail = document.getElementById('email');
    var validarSenha = document.getElementById('password');
    if(validarEmail.value == "") {
        document.getElementById('text-required-email').hidden = false;
    }
    if (validarSenha.value == ""){
        document.getElementById('text-required-password').hidden = false;
    }
    else if (validarSenha.value !== "" && validarEmail.value !== ""){
        document.getElementById('email').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('sign-in').hidden = true;
        document.getElementById('cancel').hidden = false;
        document.getElementById('text-login').hidden = false;
        document.getElementById('text-required-email').hidden = true;
        document.getElementById('text-required-password').hidden = true;
    }
    
}

function cancel(){
    document.getElementById('email').hidden = false;
    document.getElementById('password').hidden = false;
    document.getElementById('sign-in').hidden = false;
    document.getElementById('cancel').hidden = true;
    document.getElementById('text-login').hidden = true;
}