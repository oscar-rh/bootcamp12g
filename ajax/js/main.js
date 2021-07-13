

const actualizaGato = () => {


    //console.log("entro")
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function ()  {
        // console.log("state", xhttp.readyState)
        // console.log("status", xhttp.status)

           // console.log("state", this.readyState)
            // console.log("status", this.status)        

        if (this.readyState == 4 && this.status == 200) {
                const urlimagen = JSON.parse(xhttp.responseText).file
                const imagen = document.getElementById("divgato")                
                imagen.setAttribute("src", urlimagen) 
                  }
    }

    xhttp.open("GET", "https://aws.random.cat/meow",true )
    xhttp.send()

}


const btnActualizar = document.getElementById("btnGato")

// btnActualizar.addEventListener ("click",  actualizaGato)
btnActualizar.addEventListener ("click",  ()=> {
    //console.log("hola")
    actualizaGato()
})


actualizaGato()