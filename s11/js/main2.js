var string1 = prompt ("introduce la palabra")

hayMuchasVocales(string1)

function hayMuchasVocales(string1)
{
    
    letra = string1.charAt(0);

    
    
    var resultado =  letra.match(/["aeiou"]/gi)

    var resultado =  letra.match(/["0123456789"]/gi)


    if (   letra.match(/["aeiou"]/gi)  )

    {

        console.log("es vocal")

    }





}

