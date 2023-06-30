function Fecha()
{
    var fecha= new Date();

    var mes = fecha.getUTCDate();

    document.getElementById("TextoFecha").innerHTML = "Estamos en el: " + mes;
}