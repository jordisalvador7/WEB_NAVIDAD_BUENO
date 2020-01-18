var BASE_URI = "http://localhost:8080/dsaApp";
var username = "Jordi";
function decode() {
    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++)
    {
        console.log("username:",queries[i]);
    }
}
function myfunction(id) {
    var btn = document.getElementById(id);
    btn.innerHTML='<button id=id type="button" class="btn btn-buya" onclick="buy(this.id);myfunction(id)" disabled>BUY</button>';
}
function buy(id){
    console.log("ou mama");
    console.log(id,": id");
    var myObj = {
        nombre: id,
    };
    console.log(myObj,": Hola que tal");
    $.ajax({
        type: 'POST',
        url: '/dsaApp/user/buy/'+ username,
        data: JSON.stringify(myObj),
        success: function(data) {
            location.href = "http://localhost:8080/Inventory.html";
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if(xhr.status===500){
                alert("Contraseña incorrecta");
            }
            else{
                alert("Usuario no encontrado");
            }
        },
        contentType: "application/json",
        dataType: 'json'
    });
}
function titulo(){
    var container = document.getElementById("titulo");
    container.innerHTML='<h1>¡Salva la Navidad!</h1>'+'<p>¡Reparte los regalos de navidad sin que te descubran los niños !</p>';
}

$(document).ready(function(){
    decode();

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="popover1"]').popover();
    $('[data-toggle="popover2"]').popover();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    $("#inventory_button").click(function () {
        location.href = "http://localhost:8080/Inventory.html";
    })
    titulo();
    $.get("http://localhost:8080/dsaApp/user/profile/"+username, function (data) {
        var username = data.username;
        var password = data.password;
        var name = data.name;
        var surname = data.surname;
        var mail = data.mail;
        var age = data.age;
        var username_text = "Usuario";
        var password_text = "Contraseña";
        var name_text = "Nombre";
        var surname_text = "Apellido";
        var mail_text ="Mail";
        var age_text ="Edad";
        console.log("Prerfil",data);
        var insertion = "<tr><td>" + username_text + "</td><td>" + username + "</td></tr><tr><td>" + password_text + "</td><td>" + password + "</td></tr><tr><td>" + name_text+"</td>><td>" + name + "</td></tr><tr><td>" + surname_text + "</td><td>" + surname + "</td></tr><tr><td>" + mail_text + "</td><td>" + mail + "</td></tr><tr><td>" + age_text + "</td><td>" + age + "</td></tr>";
        $("#mytabla tbody").append(insertion);
    }, "json");
    $.get("http://localhost:8080/dsaApp/user/statistics/"+username, function (data) {
        var partidasjugadas = data.partidasjugadas;
        var regalosentregados = data.regalosentregados;
        var minutosjugados = data.minutosjugados;

        var partidasjugadas_text = "Partidas";
        var regalosentregados_text = "Regalos entregados";
        var minutosjugados_text = "Tiempo total";

        console.log("Profile:",data);
        var insertion = "<tr><td>" + partidasjugadas_text + "</td><td>" + partidasjugadas + "</td></tr><tr><td>" + minutosjugados_text + "</td><td>" + minutosjugados + "</td></tr><tr><td>" +regalosentregados_text +"</td>><td>" + regalosentregados + "</td></tr>";
        $("#statistics_tabla tbody").append(insertion);
    }, "json");
    $.get("http://localhost:8080/dsaApp/user/inventory/"+username, function (data) {
        console.log("Data:",data.lista[0].nombre);
        for (let i = 0; i<data.lista.length; i++)
        {
            myfunction(data.lista[i].nombre);
        }
    }, "json");
})