/*
Input: kodemia doceava generación
Output: 13
Input: el pájaro dev
Output: 5

Realizar una funcion que que cuente el numero de vocales que hay en un string

1.- recibir un string y almacenarlo en una variable
2.- usar el metodo match con el rango de las vocales acentuadas y no acentuadas para que me devuelva un arreglo con todas las incidencias
3.- imprimir la longitud del arrelo para determinar el numero de vocales del string

*/



function countVowels(str)
{
    var arrayResult 
    arrayResult = str.match(/[aeiouáéíóú]/gi)    
    return arrayResult
}


var string1 = prompt("countVowels.- Introduce un string")
var vowelsArray = countVowels(string1)
console.log ("countVowels.- ex 1: " + vowelsArray.length)




/*
Input: Más cuerdo es, el que acepta su propia locura
Output: 9
Input: Me volví loco, con largos intervalos de horrible cordura
Output: 9

Realizar una funcion que que cuente el numero de palabras que hay en un string

1.- recibir un string y almacenarlo en una variable
2.- usar el metodo split con el separador (" ") para obtener un arreglo con las palabras del string
3.- imprimir la longitud del arrelo para determinar el numero de palabras del string

*/


function countWords(str)
{
    var arrayResult 
    arrayResult = str.split(" ")
    return arrayResult
}


var string2 = prompt("countWords.- Introduce un string")
var vowelsArray = countWords(string2)
console.log ("countWords.-ex 2: " + vowelsArray.length)



/* 
Input:Sé verla al revés
Output: true
Input: La mañana es fría
Output: false
Input:Yo hago yoga hoy
Output: true
Input: Y natación mañana
Output: false

Realizar una funcion que revise si un string empieza y termina con la misma letra

1.- recibir un string y almacenarlo en una variable
2.- obtener el primer caracter del string y almacenarlo en una variable, usando charAt(0)
3.- tomo la longitud del string para saber cuantos caracteres tiene y saber la posición del ultima letra
4.- obtener el ultimo caracter del string y almacenarlo en una variable, 
5.- ambos carceres los paso a mayusculas o minusculas para que la comparacion sea indistinta
6.- comparo los valores

*/


function compareInitialFinalChar(str3)
{
    var res 
    var charA = str3.charAt(0)
    var strLength = str3.length
    var charB = str3.charAt( strLength - 1 )

    charA = charA.toLocaleLowerCase()
    charB = charB.toLocaleLowerCase()
    //console.log (charA + ' - ' + charB )
    res  = charA == charB? true : false 
    return res
}


var string3 = prompt("compareInitialFinalChar.- Introduce un string")
var result = compareInitialFinalChar(string3)
console.log ("compareInitialFinalChar.-ex 3: " + result)


/*

Crear una función que evalúe un string con las siguientes pruebas:
Tener al menos 8 carácteres
Tener al menos un número
Tener al menos una mayúscula

Devolver true si el string cumple con las reglas, o imprimir en consola la regla o reglas que no se están cumpliendo

1.- recibir un string y almacenarlo en una variable
2.- medir la longitud del string para ver si al menos  8 caracteres y almaceno la misma en una variable
3.- si no tiene al menos 8 escribir el mensaje "deber tener al menos 8 caracteres"
4.- buscar que el string tenga un numero utilizando metodo match para validar que tenga numero, esto me devuelve un array
5.- validamos que el array anterior no sea nulo (es decir que tenga elementos), si es nulo  quiere decir que no encontro numero
6.- si no tuvo mayuscula envio el mensaje "deber tener al menos un numero"
7.- buscar que el string tenga un una letra mayuscula utilizando metodo match esto me devuelve un array
8.- validamos que array anterior no sea nulo (es decir que tenga elementos), si es nulo  quiere decir que no encontro mayuscula
9.- si no tuvo mayuscula envio el mensaje "deber tener al menos una mayuscula"
10.- si todas las condiciones se cumplieron solo mando un true


*/


function validateRules(str4)
{

    var lengthStr = str4.length
    var mensaje = ""
    if (lengthStr < 8)
    {
        //console.log("el string debe tener al menos 8 caracteres")
        mensaje = mensaje + "el string debe tener al menos 8 caracteres \n"
    }

    var arrayNum = str4.match(/[0123456789]/)
    //var lenthArrayNum = arrayNum.length
    if (arrayNum === null  )
    {
        //console.log("el string debe tener al menos un numero")
        mensaje = mensaje.concat("el string debe tener al menos un numero \n")
    }

    var arrayMay = str4.match(/[A-Z]/)
    // var lenthArrayMay =  arrayMay.length
    if (arrayMay === null )
    {
        //console.log("el string debe tener al menos una Mayuscula")
        mensaje = mensaje.concat("el string debe tener al menos una  Mayuscula \n")
    }
    
    if  ( (lengthStr >= 8) & ( arrayMay !== null  ) & (arrayNum !== null ) )
    {
        mensaje = mensaje.concat(true)
    }

    return mensaje

}

var string4 = prompt("validateRules.- Introduce un string")
var result4 = validateRules(string4)
console.log("validateRules. ex4.- \n" + result4)




/*
Ejercicio 5
crear una función que genere un string con "n" caracteres aleatorios,  con la única condición de que no haya caracteres repetidos en el string

1.- recibir el numero de caracteres en una variable
2.- tener una variable string para recibir las letras generas
3.- generar una letra aleratoria y guardarla en una variable 
    3.1.- Generar un numero aleatorio entre el rango de las minusculas  (tabla de codigos ascii)
    3.2.- con el codigo ascii obtener la letra que corresponde
4.- revisar si al incluir la letra en el string ya existe o no
    Si no existe la agrego
    Si existe vuelvo por otra letra aleatoria revisando que no exista
5.- cada que genero y añado una letra al string verifico la cantidad de letras en el mismo
6.- si la cantidad de letras es igual a la cantidad de caracteres solicitados ya termino, si no sigo buscando.
7.- muestro el string
*/



var string5 = parseInt(prompt("randomChar.- Introduce numero de caracteres"))
var result5 = randomString(string5)
console.log("randomChar. ex5.- \n" + result5)


function randomString(numChar)
{
    var result = ""
    var lengthString = 0
    var letter = ""

    /// if (numChar <= 26)   // solo puede haber 26 letras diferentes
    // {     
        do 
        {
            letter = randomChar()


            //debugger
            if (result.indexOf(letter) == -1)       // si la letra no existe en el string, la agrego
            {
                result = result + letter
                lengthString = result.length    
            }

        }
        while( lengthString <  numChar )    // repito mientras la cantidad de letras sea menor a la solicitada
    // }

    return result
}

// 97 ascii de la a
// 123 ascii de la z  

function  randomChar()
{
    var letra = ""
    var numChar = Math.floor( Math.random() * (123 - 97) + 97 )   // para que caiga en el rango de las letras minusculas
    letra = String.fromCharCode(numChar) 
    return  letra   

}
