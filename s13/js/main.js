let dataArray = [
    [
        "Israel",
        "Salinas Martínez"
    ],
    [
        "David",
        "Cermeño Moranchel"
    ],
    [
        "Charles",
        "Silva"
    ],
    [
        "Michael",
        "Villalba Sotelo"
    ]
]

/* mentorsArray = [
    {
        name:"Israel",
        lastName:"salinas"
    }...{...}
]*/


const convierteArray = arrayDatos  => 
{
    let arrDat = []
    let objMentor = {}
    let arrayResultado = []
    
    for ( let i = 0; i < arrayDatos.length; i++ )
    {
        arrDat =  arrayDatos[i]        
        objMentor = {}
        objMentor.name = arrDat[0]
        objMentor.lastname = arrDat[1]
        arrayResultado.push(objMentor)
    }
    return arrayResultado

}
mentorsArray = convierteArray(dataArray)
console.log( mentorsArray  )


