//https://blog-12g-default-rtdb.firebaseio.com/.json
/*
1-Cambiar el campo de especie a un select y agregar un filtro por especie que filtre las cards mostradas
2.- Crear la vista del detalle de la mascota
3.- Crear avisos para el CRUD ( mostrar un aviso cuando una mascota se guarde exitosamente, y mostrar un aviso cuando se vaya a borrar una mascota --bootstrap modal-- )
4.- Crear vista de adopción de mascotas ( debe mostrar todas las mascotas que estén disponibles en adopción --requiere un botón de adoptar--)
5.- crear la funcionalidad de adoptar una mascota
     antes de adoptar, debe pedir al usuario su nombre, dirección y teléfono
*/

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

const printAllPets = () => {
    $(".pets-wrapper").empty()
    let allPets = getAllPets()
    for( pet in allPets ){
        let { name, specie, age, picture } = allPets[pet]

        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
           <a href = "vista.html?mascota=${pet}" target = "_blank" > <img src=${picture} class="card-img-top" alt="..."> </a>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <a href="#" class="btn btn-primary" data-pet-key=${pet}>Go somewhere</a>
            </div>
            </div>
            </div>
        `
        $(".pets-wrapper").append(petHtml)
    }
}

//Imprimimos todas las mascotas desde el principio
printAllPets()
