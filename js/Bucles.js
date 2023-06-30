function For()
{
    a = [0,0,0,0,0, 1, 0, 0, 0, 0];

    for(var i= 0; i < a.length; i++ )
    {
        if(a[i] == 1)
        {
            alert("La posicion numero " + i + " contiene un 1");
        }
    }
}

function While()
{
    var num= document.getElementById("TextoWhile").value;

    var cont= 0;

    var resultado= 0;

    while(cont <= num)
    {
        cont++;
        resultado+= 2;
    }

    alert("El resultado es: " + resultado);
}

function DoWhile()
{
    var num= document.getElementById("TextoDoWhile").value;

    var cont= 0;

    var resultado= 0;

    do
    {
        cont++;
        resultado+= 5;
    }
    while(cont <= num)

    alert("El resultado es: " + resultado);
}