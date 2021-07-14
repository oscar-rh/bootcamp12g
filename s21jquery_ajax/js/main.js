const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'
const savePet = petData => {
    $.ajax({
        method:"POST",
        url:`${BASE_URL}/pets.json`,
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
}
const patchPet = (petId, petData) => {
    $.ajax({
        method:"PATCH",
        url:`${BASE_URL}/pets/${petId}.json`,
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
}

const getAllPets = () => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

const getPetById = petId => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets/${petId}.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

$("#save-pet").click(() => {
    let petObject = {}
    $("#pet-form input").each( function(){
        let property = $(this).attr("name")
        let value = $(this).val()
        console.log(property, value )
        petObject = {...petObject, [property] : value }
    })
    console.log( petObject )
    savePet( petObject )
    printAllPets()
})


const displaySelected = (someId) => {
    let mascota = getPetById(someId)
    let { name, specie, age, picture } = mascota
   

    $(".modal-body").empty()   
    $(".modal-title").html(name)
    
    let mascotaHtml = `
    <div class="card pet-card2" style="width: 18rem;">
    <img src="${picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Nombre: ${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Especie: ${specie}</li>
      <li class="list-group-item">Edad: ${age}</li>
    </ul>
  </div>`
  $(".modal-body").append(mascotaHtml)

}

const printAllPets = () => {
    $(".pets-wrapper").empty()
    let allPets = getAllPets()
    for( pet in allPets ){
        let { name, specie, age, picture} = allPets[pet]
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
        <a href = "vista.html?mascota=${pet}&op=1" target = "_blank" > <img src=${picture} class="card-img-top" alt="..."> </a>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <button type="button" class="btn btn-primary btnDetalle" data-pet-key=${pet} data-toggle="modal" data-target="#exampleModal ">Detalle</button>
                <a href="adoptForm.html?adoptKey=${pet}" class="btn btn-success adopt" data-pet-key=${pet}>Adoptame</a>
            </div>
            </div>
            </div>
        `
        $(".pets-wrapper").append(petHtml) 


    }

    $('.btnDetalle').click( (event)=>{
        //console.log(event)
        let id = $(event.target).data("pet-key")
        // console.log("id", $(event.target).data("pet-key"))
        displaySelected (id)
    } )

}


//Imprimimos todas las mascotas desde el principio
printAllPets()