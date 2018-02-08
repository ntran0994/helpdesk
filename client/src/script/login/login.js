document.addEventListener("DOMContentLoaded", function(event) { 
    var forgetForm = document.getElementsByClassName("forget-form");
    var loginForm = document.getElementsByClassName("login-form");
    for (var i=0;i<forgetForm.length;i++){
        forgetForm[i].style.display = 'none';
    }

    document.getElementById("forget-password").onclick = function(){
        for (var i=0;i<forgetForm.length;i++){
            forgetForm[i].style.display = '';
        }
        for (var i=0;i<loginForm.length;i++){
            loginForm[i].style.display = 'none';
        }
    }
    document.getElementById("back-btn").onclick = function(){
        for (var i=0;i<forgetForm.length;i++){
            forgetForm[i].style.display = 'none';
        }
        for (var i=0;i<loginForm.length;i++){
            loginForm[i].style.display = '';
        }
    }
});