/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números*/

var numero1 = parseNumber(prompt("introduce el numero 1:"))
var numero2 = parseNumber(prompt("introduce el numero 2: "))

console.log( numero1 + numero2 )
console.log(numero1 - numero2 )
console.log(numero1 * numero2 )
console.log(numero1 / numero2 )
console.log(numero1 % numero2 )


/*
    ejercicio 2:
    pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
*/


var numero1 = parseNumber(prompt("introduce el numero 1:"))
var numero2 = parseNumber(prompt("introduce el numero 2: "))

if (numero1 >  numero2 )
    console.log ("numero 1 es mayor")
else 
    if (numero1 <  numero2 )
        console.log ("numero 2 es mayor")
    else 
        console.log ("son iguales")


/*
    ejercicio 3:
    pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto
    */


var letra1 = prompt("Letra 1: ")
var letra2 = prompt("Letra 2: ")

if (letra1  >  letra2 )
    console.log ("Letra 1 es mayor")
else 
    if (letra2 >  letra1 )
        console.log ("Letra 2 es mayor")
    else 
        console.log ("son iguales")