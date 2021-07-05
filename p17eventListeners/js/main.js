
let arrayMentors = []
let btnGuardar = document.getElementById("guardar")
let btnBorrar = document.getElementById("borrar")
let btnLimpiar = document.getElementById("limpiar")

btnLimpiar.addEventListener("click", () => {
    cleanControls()
})

btnGuardar.addEventListener("click", () => {

    let idPerson =  document.getElementById("indice").value

    //console.log("idPerson *" , idPerson , "*" )
    if (idPerson == "")
    {
        createPerson()
    }
    else 
    {
        updatePerson()
    }

    cleanControls()
    cleanTable()
    displayTable(arrayMentors)

})


btnBorrar.addEventListener("click", () => {

    let idPerson =  document.getElementById("indice").value    
    if (idPerson != "")
    {
        arrayMentors.splice(idPerson,1)    
    }
    cleanControls()
    cleanTable()
    displayTable(arrayMentors)

})


function createPerson(){
    let nombre = document.getElementById("nombre").value.trim()
    let apellidos = document.getElementById("apellidos").value.trim()
    console.log("datos N:" + nombre + " A:" + apellidos )
    if ( nombre != ""  && apellidos != "")
    {
        let mentor = { name : nombre, lastname : apellidos  }    
        arrayMentors.push(mentor)
    }
    
}


const displayPerson = (event ) => { 

    //console.log(event.target)
    let id =  event.target.dataset.personIndex   
    let  { name, lastname } = arrayMentors[id]
    document.getElementById("nombre").value= name
    document.getElementById("apellidos").value = lastname 
    document.getElementById("indice").value = id

}


function updatePerson(){
    
    let id = document.getElementById("indice").value 
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let mentor = { name : nombre, lastname : apellidos  }  
    arrayMentors.splice(id,1,mentor)
    cleanTable()
    displayTable(arrayMentors)
}

const deletePerson = (event ) => { 
            
    let id =  event.target.dataset.personIndex
    arrayMentors.splice(id,1)    
    cleanTable()
    displayTable(arrayMentors)
    //cleanControls()

}

function cleanControls (){

        document.getElementById("nombre").value= ""
        document.getElementById("apellidos").value = ""
        document.getElementById("indice").value = ""
    
}

function cleanTable(){
    let tableBody =   document.querySelector("#person-table")
    tableBody.innerHTML = ""
}



const displayTable = personArray => 
{
    
    personArray.forEach(      (person, index) =>  
    {
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

        let buttonSel = document.createElement("td")
    
        let nameText = document.createTextNode( name )
        let lastnameText = document.createTextNode( lastname )
        let indexText = document.createTextNode( index + 1 )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-danger")
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)

        // añadimos al boton de borrar un atribudo id con la posicion del elemento en el array 
        deleteButton.dataset.personIndex =  index
        nameTd.dataset.personIndex =  index

        buttonTd.appendChild(deleteButton)


        let selButton = document.createElement("button")
        selButton.classList.add("btn", "btn-info")
        buttonText = document.createTextNode("Consultar")
        selButton.appendChild(buttonText)
        selButton.dataset.personIndex =  index
        buttonSel.appendChild (selButton)

    
        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)
    
        personRow.appendChild( indexTd )
        personRow.appendChild( nameTd )
        personRow.appendChild( lastnameTd )
        personRow.appendChild( buttonTd )
        personRow.appendChild( buttonSel )
    
        document.getElementById("person-table").appendChild( personRow )

        // añadimos al boton el Listener para que al presionarlo el boton traiga el id a borrar en el array
        deleteButton.addEventListener ("click", deletePerson)

        selButton.addEventListener ("click", displayPerson)
        nameTd.addEventListener ("click", displayPerson)
    
    }

        

    
    )



}


