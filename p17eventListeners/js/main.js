
let arrayMentors = []
let btnGuardar = document.getElementById("guardar")

btnGuardar.addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let mentor = { name : nombre, lastname : apellidos  }    

    arrayMentors.push(mentor)

    // limpiamos los controles una vez que ya se guardo el objeto en el areglo
    document.getElementById("nombre").value= ""
    document.getElementById("apellidos").value = ""

    // desplegamos la tabla
    cleanTable()
    displayTable(arrayMentors)

})


function cleanTable(){
    let tableBody =   document.querySelector("#person-table")
    tableBody.innerHTML = ""
}


const displayTable = personArray => {
    
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

        // añadimos al boton de borrar un atribudo id con la posicion del elemento en el array 
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

        // añadimos al boton el Listener para que al presionarlo el boton traiga el id a borrar en el array
        deleteButton.addEventListener ("click", (event ) => { 
            
            let id =  event.target.id 
            arrayMentors.splice(id,1)
            // volvemos a pintar la tabla con el arreglo como quedo
            cleanTable()
            displayTable(arrayMentors)
        
        })
    
        }
    
    )



}


