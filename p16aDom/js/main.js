
function suma()
{
    let spanNumero = document.querySelector('#number')
    let numero = Number(spanNumero.innerHTML)
    //console.log(spanNumero)
    //console.log(number)    
    numero += 1
    //spanNumero.textContent = numero    
    spanNumero.innerHTML = numero
}


function resta()
{
    let spanNumero = document.getElementById('number')
    let numero = Number(spanNumero.innerHTML)
    numero -= 1
    spanNumero.textContent = numero    
}

/*
let body = document.querySelector('body')
let label = document.createElement('label')
let texto = document.createTextNode('Restar 2')
label.appendChild(texto)
label.setAttribute("id", "otraResta")
label.setAttribute("onMouseOver", "resta()")
label.setAttribute("class", "letraAzul")
label.setAttribute("onMouseOver", "style.color='red'")
label.setAttribute("onMouseOut", "style.color='blue'")
//label.style.color= "orange"
body.appendChild(label)
document.getElementById("otraResta").addEventListener("click", resta);
*/
