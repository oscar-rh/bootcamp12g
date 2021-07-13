
 

  $('p').html("hola")
  $('#iddiv').addClass('bg-warning');


  $('#boton').click(  () => {   

    
    // $("#iddiv").load("https://blog12gk-default-rtdb.firebaseio.com/autores/.json");

    $("#iddiv").load("https://blog12gk-default-rtdb.firebaseio.com/autores/.json", function(responseTxt, statusTxt, xhr){
        
        console.log(responseTxt)
        console.log(statusTxt)
        console.log(xhr)
        if(statusTxt == "success")
          alert("External content loaded successfully!");
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });  


  })



  $("#boton2").click( () => { 




      console.log("boton2")
        $.get("https://blog12gk-default-rtdb.firebaseio.com/autores/.json", function(data, status){
        console.log(data)
        alert("Data: " + data + "\nStatus: " + status);
      })

  });




  $("#boton3").click( () => { 

/*
    $.ajax({
      type: "POST",
      url: "https://blog12gk-default-rtdb.firebaseio.com/autores/.json",
      data: JSON.stringify({  nombre: "Paulo Coelho"  }),      
      success: function (response) {
        console.log(response)
      },
      error: error => {
        console.log("hubo error")
      },
      async: true
      
    });
*/
    
    console.log("boton3")

    //data = {      name: "Pauloo Coelho"  }.serialize()

      $.post("https://blog12gk-default-rtdb.firebaseio.com/autores/.json",
      JSON.stringify({  nombre: "Stephen King"  }),
      function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
      })
    

    });


    
    
    // console.log("hola mundo")


//console.log("otro hola mundo")