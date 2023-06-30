function ColeccionesTipadas()
{
    var a = new Float64Array(10);

    for(var i = 0; i < a.length; i++)
    {
        a[i]= 5.5;

        if(i == 5)
        {
            a[i]= 6.5;

            alert("El 6.5 se encuentra en la posicion: " + i);
        }
    }
}