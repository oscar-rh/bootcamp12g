
console.log("Numero Primo")

function esPrimo(number)
{

    contador = 0
    
    for (var divisor = 1; divisor <= number; divisor++) {
            
            if (number % divisor == 0)
            {
                contador  = contador + 1
            }
     }

     if (contador == 2)
     {
        alert("es primo")
     }
     else 
     {
        alert("no es primo")
     }
    
    
}

var valor1 = Number(prompt("Introduce un numero "))

esPrimo(valor1)