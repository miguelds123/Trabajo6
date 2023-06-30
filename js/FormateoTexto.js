function CambioString()
{
    var texto = document.getElementById("TextoString").innerHTML;

    var nuevoTexto= texto.toLowerCase();
    
    document.getElementById("TextoString").innerHTML = nuevoTexto;
}