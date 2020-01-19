var username = "jota";
var BASE_URI = "http://147.83.7.205:8080/dsaApp/";

$(document).ready(function(){
    console.log("Hola");
    $('#login').on('submit', function(e){
        user = $("#loginUsername").val();
        var myObj = {
            username: $("#loginUsername").val(),
            password: $("#loginPassword").val()
        };
        e.preventDefault();
        console.log("Hola hola");
        $.ajax({
            type: 'POST',
            url: 'http://147.83.7.205:8080/dsaApp/auth/login',
            data: JSON.stringify(myObj),
            success: function(data,xhr) {
                if(xhr.status==201){
                    location.href = "http://147.83.205:8080/admin.html";
                }
                else {
                    window.location = "http://147.83.7.205:8080/Home.html?username=" + $("#loginUsername").val();
                }},
            error: function (xhr, ajaxOptions, thrownError) {
                if(xhr.status===500){
                    alert("La contraseña no coincide");
                }
                if(xhr.status==201){
                    location.href = "http://147.83.205:8080/admin.html";
                }
                else{
                    alert("Usuario no encontrado");
                }
            },
            contentType: "application/json",
            dataType: 'json'
        });
    });
    $('#register').on('submit', function(e){
        var myObj2 = {
            username: $("#registerUsername").val(),
            password: $("#registerPassword").val(),
            name: $("#registerName").val(),
            surname: $("#registerSurname").val(),
            mail: $("#registerMail").val(),
            age: $("#registerAge").val()
        };
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'http://147.83.7.205:8080/dsaApp/auth/register',
            data: JSON.stringify(myObj2),
            success: function(data) {
                window.location="http://147.83.7.205:8080/Home.html?username="+ $("#registerUsername").val();
            },
            error: function (xhr, ajaxOptions, thrownError) {
                if(xhr.status===500) {
                    alert("La contraseña no coincide");
                }
                if(xhr.status===201) {
                    window.location="http://147.83.7.205:8080/Home.html?username="+ $("#registerUsername").val();
                }
                else {
                    alert("El usuario ya existe.");
                }},
            contentType: "application/json",
            dataType: 'json'
        });
    });
});