
let killers = [ 'jason', 'freddy', 'chucky' ]

let body = document.querySelector('body')

killers.forEach( item => {

            let parrafo = document.createElement('p')            
            let texto = document.createTextNode( item )
            parrafo.appendChild(texto)
            body.appendChild(parrafo)

} )





let containerList = document.createElement('ul')
body.appendChild(containerList)

killers.forEach( item => {

    let listItem = document.createElement('li')                
    containerList.appendChild(listItem).textContent = item

} )







