

var string1 = prompt("dame un string")

identifyInitialChar (string1)


function identifyInitialChar( string1 )
{
    var caracter = string1.charAt(0);
    console.log (caracter)
    if (Number(caracter))
    {
        console.log ("inicia con numero")
    }
    else 
    {
        // console.log ("no es numero")
        
        
        var vocales = "AEIOUaeiou"
        var encuentra = vocales.indexOf(caracter)
        
        if (encuentra > 0)
        {
            console.log ("inicia con vocal")

        }
        else
        {
            var codigoAscii = caracter.charCodeAt(0)
            console.log (codigoAscii)

            if  (  (codigoAscii >= 65 & codigoAscii <= 90)  | (codigoAscii >= 97 & codigoAscii   <= 122)  )
            {
                console.log ("INICIA CON consonante")
            }
            else 
            {
                console.log ("inicia CON simbolo especial")
            }

        }

    }
    

}