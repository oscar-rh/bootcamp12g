//alert("hola")
$(document).ready(() =>{
    // selectores
    // $('.header').html('este texto es de jquery')  // por clase
    // $('#header').html('este texto es de jquery')  // por id
    $('h1').html('este texto es de jquery')
    //document.querySelector("body").innerHTML ="este texto es desde javascript"
    

    $('h1').attr({'dataset': '2', arial: 'test'});
    $('h1').attr('dataset2', '3');

    $('p').addClass('display-4') 
    //$('p').removeClass('display-4') 
    $('p').css({'color':'red'})


    $('p').hide()   // lo oculta pero esta en el dom
    $('h1').remove(); // quita el elemento  en el dom


    const valorinput = $('input').val();
    console.log(valorinput)
    
}
)
