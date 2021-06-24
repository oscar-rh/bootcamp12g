
/*
function transformName(name, lastname)
{
    var nameChanged
    nameChanged = name.toLowerCase() + " " +  lastname.toUpperCase()
    return nameChanged
}


var name = prompt("Introduce tu nombre")
var lastname = prompt("Introduce tu apellido")

var fullname = transformName(name, lastname)

console.log( fullname )
*/
/*alert( fullname )*/



/* 
ejercicio 1: Comparar 2 strings, y determinar cuál de ambos es el más largo
input: "string 1", "some larger string"
output: "el string { string } es el más largo"
 */
var string1 = prompt("(Comparar) String 1: ")
var string2 = prompt("(Comparar) String 2: ")
var lengthStr1 = string1.length
var lengthStr2 = string2.length
var largerString = ""
var answer = ""

if (lengthStr1 > lengthStr2)
    largerString = string1
else
    largerString = string2

// console.log ("el string {" + largerString + "} es el mas largo")
answer = answer.concat("el string {",  largerString , "} es el mas largo" )
console.log (answer)
alert(answer)



/*
ejercicio 2: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input: "a very large string"
output: "A VeRy lArGe sTrInG"
input: "abcdefg"
output:"AbCdEfG"
*/

var string3 = prompt(" (Mayúsculas y minúsculas) Introduce un string muy largo: ")
var lengthString = string3.length
var newString = ""
var letter = ""

for (var position = 0; position <= lengthString;position ++)
{
    letter = string3.charAt(position)
    if (position % 2 == 0)
        newString = newString.concat(letter.toLowerCase()) 
    else
        newString = newString +  letter.toUpperCase()

}
console.log (newString)
alert(newString)


/* 
ejercicio 3: Crear un nuevo string
( deducir lo que se debe hacer con base en el input y el output )
input:"Kodemia"
output:"aimedoK"
*/

var string4 = prompt("(invertido) Introduce un string : ")
var anotherLength = string4.length
var newString2 = ""
var anotherLetter = ""
for (var position = anotherLength - 1  ; position >= 0 ; position --)
{
    
    anotherLetter = string4.charAt(position)
    newString2 = newString2.concat(anotherLetter)
}

console.log (newString2)
alert(newString2)








