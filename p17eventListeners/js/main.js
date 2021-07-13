
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
    //leerPersonas()    
    //displayTable(arrayMentors)

})

btnBorrar.addEventListener("click", () => {

    let idPerson =  document.getElementById("indice").value    
    if (idPerson != "")
    {
        //arrayMentors.splice(idPerson,1)    
        borraPersona(idPerson)
    }
    /*
    cleanControls()
    cleanTable()
    displayTable(arrayMentors)
    */

})

function createPerson(){
    let nombre = document.getElementById("nombre").value.trim()
    let apellidos = document.getElementById("apellidos").value.trim()
    //console.log("datos N:" + nombre + " A:" + apellidos )
    if ( nombre != ""  && apellidos != "")
    {
        // let mentor = { name : nombre, lastname : apellidos  }    
        // arrayMentors.push(mentor)
        guardarPersona (nombre, apellidos)
        //leerPersonas()    
        //displayTable(arrayMentors)
        
    }
    
}

const displayPerson = (event ) => { 

    //console.log(event.target)
    let id =  event.target.dataset.personIndex   
    //  let  { name, lastname } = arrayMentors[id]
    consultaPersona (id)

}

function updatePerson(){
    
    let id = document.getElementById("indice").value 
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    //let mentor = { name : nombre, lastname : apellidos  }  
    //arrayMentors.splice(id,1,mentor)
    //cleanTable()
    //displayTable(arrayMentors)
    console.log("updatePerson", id, nombre, apellidos)

    actualizaPersona (nombre, apellidos, id)
}

const deletePerson = (event ) => { 
            
    let id =  event.target.dataset.personIndex
    //arrayMentors.splice(id,1)    
    //cleanTable()
    //displayTable(arrayMentors)
    //cleanControls()
    console.log(id)
    borraPersona(id)

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

    cleanControls()
    cleanTable()

    console.log("arrayMentors en DisplayTable", personArray)
    personArray.forEach(      (person, index) =>  
    {
        let {name, lastname, llave } = person 
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
        let indexText = document.createTextNode( llave )
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-danger")
    
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)

        // añadimos al boton de borrar un atribudo id con la posicion del elemento en el array 
        deleteButton.dataset.personIndex =  llave
        nameTd.dataset.personIndex =  llave

        buttonTd.appendChild(deleteButton)


        let selButton = document.createElement("button")
        selButton.classList.add("btn", "btn-info")
        buttonText = document.createTextNode("Consultar")
        selButton.appendChild(buttonText)
        selButton.dataset.personIndex =  llave
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

const borraPersona = (id) => {
    // const endp = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/oscar/"+ id +".json" 
    const endp = `https://apikoder-b2ce0-default-rtdb.firebaseio.com/oscar/${id}.json`     
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          const respuesta = xhttp.responseText
          console.log (respuesta)
          leerPersonas()
      }
    }     
    xhttp.open("DELETE", endp,true);
    xhttp.send(); 
}

const consultaPersona = (id) => {
    
    const endp = `https://apikoder-b2ce0-default-rtdb.firebaseio.com/oscar/${id}.json` 
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
          const respuesta = JSON.parse(xhttp.responseText)
          console.log ("Consulta Persona " , respuesta)  
          
          document.getElementById("nombre").value= respuesta.nombre
          document.getElementById("apellidos").value = respuesta.apellido 
          document.getElementById("indice").value = id
          
      
      }
    }
    xhttp.open("GET", endp,true);
    xhttp.send(); 
}
                
const endpoint ="https://apikoder-b2ce0-default-rtdb.firebaseio.com/oscar/.json"

const guardarPersona = (nombre, apellido) => {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
            const respuesta = xhttp.responseText
            console.log (respuesta) 
            leerPersonas()    
            //displayTable(arrayMentors)

      }
    }
    //console.log(nombre, apellido)
    const personJavascript = {nombre, apellido}
    const peronsJson = JSON.stringify(personJavascript)
    xhttp.open("POST", endpoint,true);
    xhttp.send(peronsJson); 
}


const actualizaPersona = (nombre, apellido,id) => {
    const endp = `https://apikoder-b2ce0-default-rtdb.firebaseio.com/oscar/${id}.json`   
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
            const respuesta = xhttp.responseText
            console.log (respuesta) 
            leerPersonas()    
            //displayTable(arrayMentors)

      }
    }
    //console.log(nombre, apellido)
    const personJavascript = {nombre, apellido}
    const peronsJson = JSON.stringify(personJavascript)
    xhttp.open("PUT", endp,true);
    xhttp.send(peronsJson); 
}




const leerPersonas = () => {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          const respuesta = xhttp.responseText
          // console.log (respuesta)
           const persons = JSON.parse(respuesta) 

           console.log(persons)
           
           let arrayPersons = []
           for ( let key in persons)
           {
                const person = persons[key]
                // console.log("persona " , person)
                let mentor = {  llave : key ,  name : person.nombre, lastname : person.apellido  }    
                // console.log("mentor ", mentor)
                 arrayPersons.push(mentor)
           }
           //console.log ("voy a desplegar", arrayPersons)
           displayTable(arrayPersons)
           //arrayMentors = arrayPersons
           
      }
    }    
    xhttp.open("GET", endpoint,true);
    xhttp.send(); 
}


leerPersonas()


