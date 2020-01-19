
$(document).ready(function() {

    $.get("http://147.83.7.205:8080/dsaApp/user/ranking", function (data) {
        var i = 1;
        console.log("Data:" + data);
        while (i < 10) {
            var name = data[i].name;
            console.log("1:" + name);
            var recordTime = data[i].recordTime;
            console.log("2:" + recordTime);
            var currentRegalosentregados = data[i].currentRegalosentregados;
            console.log("3:" + currentRegalosentregados);

            var insertion = "<tr><td>" + name + "</td><td>" + currentRegalosentregados + "</td><td>" + recordTime + "</td></tr>";
           console.log("Inserción:"+insertion);
            $("#rankingid tbody").append(insertion);
            i++;
        }
    }, "json");
});
