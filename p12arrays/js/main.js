let koder = parseInt(prompt("Introduce el numero de koders"))

let arrayKoder = [];

function collectKoder (Koder){
    let name ="";

    for (let i=0; i < koder ; i++){
        
        name = prompt("Introduce el nombre")
        arrayKoder.push(name);
    }

    for (let i=0; i < koder ; i++){

        console.log(i + " " + arrayKoder[i]);
    }
}

function printKoder (){
    let numKoder = parseInt(prompt("Introduce el numero del Koder"))
    console.log(arrayKoder[numKoder - 1])
}

function printReverse (){
    arrayKoder.sort()
    console.log(arrayKoder.reverse())
}

collectKoder(koder)
printKoder()
printReverse()
iniciales()

function iniciales(){
    let iniciales = ""
    let abr = []
    let arrayNombre
    for (let i=0; i < arrayKoder.length; i++){
        arrayNombre = arrayKoder[i].split(" ")
        iniciales = ""
        for (let j=0; j< arrayNombre.length; j++){
            iniciales = iniciales + arrayNombre[j].charAt(0) + ". "
        }
            iniciales = "( " + iniciales + " )" 
            abr.push(iniciales)
    }

    for (let i=0; i < arrayKoder.length; i++)
    {
        console.log (  arrayKoder[i] + " " +  abr[i] )
    }


}