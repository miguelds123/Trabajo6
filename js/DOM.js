function Etiqueta()
{
    var p= document.getElementsByTagName("p");

    var UltimoElemento = p[p.length - 4];

    UltimoElemento.style.color = "red";
}

function Clase()
{
    var clase= document.getElementsByClassName("Ejemplo");

    for(var i = 0; i <= clase.length; i++)
    {
        var elemento = clase[i];

        elemento.style.backgroundColor = "yellow";
    }
}

function SelectorCSS()
{
    var css= document.querySelectorAll(".Ejemplo");

    for(var i = 0; i <= css.length; i++)
    {
        var elemento = css[i];

        elemento.style.backgroundColor = "red";
    }
}

function ColeccionObjetosHTML()
{
    var coleccion = document.querySelectorAll(".Ejemplo");

    coleccion.forEach(function(elemento)
    {
        elemento.style.backgroundColor = "blue";
    });
}