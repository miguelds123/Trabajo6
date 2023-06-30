
function IfElse()
{
    var num= Math.floor(Math.random() * 10) + 1;

    if(num >= 5)
    {
        document.getElementById("TextoIfElse").innerHTML = "El numero al azar es el " + num + " el cual es mayor o igual que 5";
    }
    else
    {
        document.getElementById("TextoIfElse").innerHTML = "El numero al azar es el " + num + " el cual es menor que 5";
    }
}

function Switch()
{
    var color= (document.getElementById("IngresoTextoSwitch").value);

    switch(color)
    {
        case "rojo":
            document.getElementById("CambioTextoSwitch").innerHTML = "Usted escribio el color rojo";
        break;

        case "azul":
            document.getElementById("CambioTextoSwitch").innerHTML = "Usted escribio el color azul";
        break;

        case "verde":
            document.getElementById("CambioTextoSwitch").innerHTML = "Usted escribio el color verde";
        break;

        default:
            document.getElementById("CambioTextoSwitch").innerHTML = "El color que digito no es valido, digite el color rojo, azul o verde";
        break;
    }
}

function Try()
{
    var confirmacion= (document.getElementById("IngresoTry").value);

    let a= [1];

    if (confirmacion == "si")
    {
        a= null;
    }

    try
    {
        let b= a[0];

        alert("No se activo el catch");
    }
    catch(error)
    {
        alert("Se activo el catch");

        if (error instanceof TypeError)
        {
            alert("Mensaje de error: " + error);
        }
        else
        {
            throw error;
        }
    }
}