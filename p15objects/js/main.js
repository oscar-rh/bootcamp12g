let dataArray = [
    [
        "Israel",
        "Salinas Martinez"
    ],
    [
        "David",
        "Cermeño Monrachel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]
 
/* para crear objetos del tipo Mentor, que contengan el nombre y apellidos del mentor, una propiedad con sus inciales y un método que al ser invocado devuelva el string "hola, soy {nombre} {apellidos}" 
Los objetos deben estar dentro de una colleccion llamada mentorsArray */
 
function Mentor(name, lastname){
    this.name = name
    this.lastname = lastname
    this.initials = (name + " " + lastname)
                        .split(" ")
                        .reduce(  (acum, item ) => acum + item.charAt(0).toUpperCase() + ". " , "" ).trim()     
    this.message = () => {
        return "hola, soy " + this.name  + " " + this.lastname 
    }
 
}

/*
let person1 = new Mentor ("Michael" , "Villalba Sotelo")
console.log( person1)
console.log(person1.message())
*/

const arrayToObjects = array => {
 
        let mentorsArray = []        
/*         
            mentorsArray = array.reduce  ( (acum , item) =>                 //// usar map
            {                           
                    let objMentor = new Mentor( item[0], item[1] )          /// deconstruir el objeto
                    return  [...acum , objMentor]
            }   , []   )    
            */   
        mentorsArray = array.map (  item =>  {
                    let objMentor = new Mentor( ...item )          
                    return  objMentor
                    }
            
            )   
 
        return mentorsArray 
} 
 
// console.log(arrayToObjects(dataArray))




// cada mentor tenga un metodo para que diga su calif de html, otro para css, otro para javascript  y otro que diga el promedio

let dataArray2 = [
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ],
    [
        "David",
        "Cermeño Monrachel",
        "HTML:9",
        "CSS:8",
        "JS:9"
    ],
    [
        "Charles",
        "Silva",
        "HTML:8",
        "CSS:8",
        "JS:10"
    ],
    [
        "Michael",
        "Villalba Sotelo",
        "HTML:9",
        "CSS:10",
        "JS:7"
    ]
]




function Mentor2  ([name, lastname, html, css, js])
{
    this.name = name
    this.lastname = lastname    
    this.html = html.split(":")[1] 
    this.css = css.split(":")[1] 
    this.js = js.split(":")[1]  

    this.getScoreHtml = () =>  " HTML " + this.html    
    this.getScoreCss = () =>   " CSS " + this.css    
    this.getScoreJs = () =>  " JS " + this.js    
    this.getAverage =  () => " Promedio " +  (Number(this.html) + Number(this.css) + Number(this.js)) / 3

}

const arrayToMentorObjects = array => {
     return  array.map ( item =>   new Mentor2( item )  )        
} 


/*
let person2 = new Mentor2 ( 
    [
        "Israel",
        "Salinas Martinez",
        "HTML:9",
        "CSS:8",
        "JS:7"
    ]
)
console.log(person2.getScoreCss())
console.log(person2.getScoreHtml())
console.log(person2.getScoreJs())
console.log(person2.getAverage())
*/
console.log (arrayToMentorObjects(dataArray2))

const printArrayMentors = arrDat => {
        arrDat.forEach( mentor  => {  
            console.log ( mentor.name , mentor.lastname,mentor.getScoreHtml(), mentor.getScoreJs(), mentor.getScoreCss(), mentor.getAverage()  ) 
        });
} 

printArrayMentors(arrayToMentorObjects(dataArray2))








