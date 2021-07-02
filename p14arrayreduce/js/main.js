//Dado un string cualquiera ( por ejemplo "ajaicoiashdfoqwemoc" ) encontrar la cantidad de caracteres no repetidos usados en dicho string. Ejempo:

//input:ajaicoiashdfoqwemoc

//output:13




const getNoRepeatChars =  arrayStr =>  {    
    
    let arrResult = [] 
    
    arrResult = arrayStr.reduce (   (acum, letter) => {  
                    //debugger
                    //console.log (acum, letter,index)
                    if ( !acum.includes (letter) ){
                            return [...acum, letter]                            
                    }
                    else {
                        return [...acum]
                    }

               }   , []  )


    return arrResult
}

let string1 = "ajaicoiashdfoqwemoc"
let arrString = string1.split('')
//console.log(arrString)
console.log   (getNoRepeatChars (arrString).length , getNoRepeatChars (arrString))



array = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
]
// usar reduce para obtener la siguiente información:
// -Un array con aquellas personas que votaron
// -la edad promedio de todos los votantes
// -un array con aquellos votantes que votaron y que son menores a 30 años
// -la edad promedio de los no votantes
// -el porcentaje de votantes vs no votantes


const  getPersonVoted   = arrData  => {
        let arrResults = []
        arrResults=arrData.filter(  person  => {
                        return person.voted == true
            }
        )
        return arrResults
}
 console.log("Personas que votaron: " , getPersonVoted(array))


 const getAverageAge = arrData => {
        let result = 0
        result = arrData.reduce(  (acum, person) => {
                        return acum + person.age
        }
        , 0)

        result = result / arrData.length
        return result 
 }
 console.log("Edad promedio de votantes: " , getAverageAge( array))

 const getLess30 = arrData => {
        let arrResults = []
        arrResults = arrData.filter ( person => {
                                        return (person.age < 30 && person.voted ==true)

        }
        )
        return  arrResults

 }
 console.log("Votantes menores de 30 años: " , getLess30( array))


 const getAverageAgeNoVoted = arrData => {
    let arrResults = []
    let result = 0
    arrResults =  arrData.filter ( person => {
                return (person.voted ==false)
        }
        )
        //console.log (arrResults) 
        result = getAverageAge(arrResults)       
    return result

 }
 console.log("Edad promedio de los no votantes: " , getAverageAgeNoVoted( array))


 const getPercent = (arrData , vote) => {
    let percent = 0
    let arrResults = []
    arrResults=arrData.filter(  person  => {
                    return person.voted == vote
        }
    )
    percent = (arrResults.length / arrData.length) * 100
    return percent

 } 
 console.log("Porcentaje votantes: " , getPercent( array, true))
 console.log("Porcentaje No votantes: " , (getPercent( array, false)))