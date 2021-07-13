$(document).ready( () => {

    $('.btn').on('click', (event)   => {
        $('body').removeClass()
        let color = event.target.id 
        $('body').addClass('bg-' + color)
             
    });

})


 /*
            let boton = $(event.target)
            console.log($(event.target).attr('class'))
            */              
            
            /*
            if ( boton.hasClass($(event.target).attr('class')) )
            {
                
                $('body').removeClass()
                let color = event.target.id 
               // console.log(color)
                $('body').addClass('bg-' + color)
            // }
            */