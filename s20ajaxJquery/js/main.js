const printDivisibles = () => {

    let limit = $("#limit").val()
    let divisor = $("#divisor").val()
        $("#card-wrapper").html("")
        $("h1").show()
    for( let i = 0; i < limit; i++)
    {
        i % divisor === 0 && printCard( i )
    }

    $(".number-card").click( ( event ) => {
         let acumulador = 1
                event.stopPropagation()
                console.log( event.target)
                $(event.target).toggleClass("active")
                let actives = $(".number-card .card-body.active h1")
                console.log(actives.length)
                    if (actives.length > 0)
                    {
                        actives.each(
                                   (index, e) =>
                                    {
                                        let elemento = $(e).text()
                                        acumulador *= parseInt(elemento)
                                    } 
                        )
                        $(".resultado").show()
                        $("span").html(acumulador)
                    }
                    else
                    {
                        $(".resultado").hide()
                    }
    })
}

const printCard = number => {
    let cardHtml = `
        <div class="col-3">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}


$("#go").click( printDivisibles )
$("h1").hide()
