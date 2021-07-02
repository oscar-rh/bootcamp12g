
let arrayMentors = []
let btnGuardar = document.getElementById("guardar")

btnGuardar.addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let mentor = { name : nombre, lastname : apellidos  }    

    arrayMentors.push(mentor)

    document.getElementById("nombre").value= ""
    document.getElementById("apellidos").value = ""

    cleanTable()
    printTable(arrayMentors)

})


function cleanTable(){
    let tableBody =   document.querySelector("#person-table")
    tableBody.innerHTML = ""
}


const printTable = personArray => {
    
    personArray.forEach( 
        (person, index) =>  {
        let {name, lastname } = person 
        let personRow = document.createElement("tr")
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")
    
        let nameText = document.createTextNode( name )
        let lastnameText = document.createTextNode( lastname )
        let indexText = document.createTextNode( index + 1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)
        deleteButton.setAttribute("id", index)  
    
        buttonTd.appendChild(deleteButton)
    
        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)
    
        personRow.appendChild( indexTd )
        personRow.appendChild( nameTd )
        personRow.appendChild( lastnameTd )
        personRow.appendChild( buttonTd )
    
        document.getElementById("person-table").appendChild( personRow )


        deleteButton.addEventListener ("click", (event ) => { 
            
            let id =  event.target.id 
            arrayMentors.splice(id,1)
            cleanTable()
            printTable(arrayMentors)
        
        })
    
        }
    
    )



}


