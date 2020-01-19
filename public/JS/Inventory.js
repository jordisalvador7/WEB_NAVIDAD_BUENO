var contbotas =0;
var contsaco =0;
var contregalos =0;
var contrenos=0;


function volver(id)
{ console.log("id",id);
    location.href = "http://147.83.7.205:8080/Home.html?username="+username;
}
function titulo() {
    var container = document.getElementById("titul");
    container.innerHTML = '<h1>¡SALVA LA NAVIDAD!</h1>';
}
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
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
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split ("&");
    var params = {};

    for ( var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    if (params['username']) {
        console.log('El valor del parámetro variable es: '+params['username']);
        username=params['username'];
    } else {
        console.log('No se envió el parámetro variable');
    }
    titulo();
    console.log("EEEEEEEE");
    var i=0;
    $.get("http://147.83.7.205:8080/dsaApp/user/inventory"+username, function (data) {
        console.log("Data:",data);

        while(i<data.lista.length) {
            console.log("AA:",data.lista[i]);
            if (data.lista[i] == "botas") {
                contbotas = 1;
            }
            if (data.lista[i] == "saco") {
                contsaco = 1;
            }
            if (data.lista[i] == "regalos") {
                contregalos = data.lista[i].amount;
            }
            if (data.lista[i] == "renos") {
                contrenos = data.lista[i].amount;
            }

            i++;
        }

        if (contbotas == 0) {
            console.log("Hola",1);
            document.getElementById('botas').src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png";
            var conte = document.getElementById('contenedor_botas');
            conte.style.display = "none";
        } else {
            console.log("Hola",2);
            document.getElementById('botas').src = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/4739/santa-boots-clipart-md.png";
            var conte = document.getElementById('contenedor_botas');
            conte.style.display = "block";
            contbotas=0;
        }
        if (contsaco == 0) {
            console.log("Hola",3);
            document.getElementById('saco').src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png";
            var conte = document.getElementById('contenedor_saco');
            conte.style.display = "none";
        } else {
            console.log("Hola",4);
            document.getElementById('saco').src = "https://vignette.wikia.nocookie.net/clubpenguin/images/d/d4/Santas-present-bag.png/revision/latest/scale-to-width-down/340?cb=20140113154109&path-prefix=es";
            var conte = document.getElementById('contenedor_saco');
            conte.style.display = "block";
            contsaco=0;
        }
        if(contrenos==0) {
            console.log("Hola",7);
            document.getElementById('regalo').src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png";
            var conte = document.getElementById('contenedor_regalo');
            conte.style.display = "none";
            var conta = document.getElementById('contregalo');
            conta.style.display = "none";
        }
        else{
            console.log("Hola",8);
            document.getElementById('regalo').src ="https://images.vexels.com/media/users/3/134890/isolated/preview/7f6ef474d0ae6f65d072ff98fad7326e-icono-de-lazo-rojo-de-caja-de-regalo-amarillo-3-by-vexels.png";
            var conte = document.getElementById('contenedor_regalo');
            conte.style.display = "block";
            document.getElementById('contregalo').innerHTML=contrenos.toString();
            var conta = document.getElementById('contregalo');
            conta.style.display = "block";
            contrenos=0;
        }
        if(contrenos==0) {
            console.log("Hola",7);
            document.getElementById('reno').src = "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png";
            var conte = document.getElementById('contenedor_reno');
            conte.style.display = "none";
            var conta = document.getElementById('contreno');
            conta.style.display = "none";
        }
        else{
            console.log("Hola",8);
            document.getElementById('reno').src ="https://images.vexels.com/media/users/3/133969/isolated/preview/e8d6fbf880376ebdca98ca391538dc69-reno-parado-icono-de-dibujos-animados-25-by-vexels.png";
            var conte = document.getElementById('contenedor_reno');
            conte.style.display = "block";
            document.getElementById('contreno').innerHTML=contrenos.toString();
            var conta = document.getElementById('contreno');
            conta.style.display = "block";
            contrenos=0;
        }





    }, "json");

});