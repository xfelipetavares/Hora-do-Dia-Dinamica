function horario(){
    var horaPC = new Date();
    var horas = horaPC.getHours();
    var minutos = horaPC.getMinutes();
    var segundos = horaPC.getSeconds();
    var hora_frase = document.getElementById(`hora-frase`);
    var canvas_hora = document.getElementById(`canvas-hora`);
    var imagem = document.getElementById("imagemmuda");
    var zero = ``
    var zeroh = ``
    var zeros = ``

    //coloca 0 na frente dos minutos
    if (minutos < 10){
        var zero = `0`
    }
    //coloca o 0 na frente das horas
    if (horas < 10){
        var zeroh = `0`
    }
    if (segundos < 10){
        var zeros = `0`
    }

    if(horas > 0 && horas < 12){ //bom dia
        hora_frase.innerHTML = `Bom dia, são ${zeroh}${horas}:${zero}${minutos}:${zeros}${segundos}`;
        imagem.src = "images/manha.jpg";
        document.body.style.backgroundColor = `#ba8d56`;
    } else if (horas >= 12 && horas < 18) { //boa tarde
        hora_frase.innerHTML = `Boa tarde, são ${zeroh}${horas}:${zero}${minutos}:${zeros}${segundos}`
        imagem.src = "images/tarde.jpg";
        document.body.style.backgroundColor = `#afcfde`
    } else if (horas >= 18 && horas <= 23 && minutos <= 59){ //boa noite
        hora_frase.innerHTML = `Boa noite, são ${zeroh}${horas}:${zero}${minutos}:${zeros}${segundos}`
        imagem.src = "images/noite.jpg";
        document.body.style.backgroundColor = `#1b475a`
    }
    requestAnimationFrame(horario)
}
