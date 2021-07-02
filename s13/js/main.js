/*usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-crear un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/
var mentorsArray = [
    {
      name: "Israel Salinas Martinez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "David Cermeño Moranchel",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Charles Silva",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Michael Villalba Sotelo",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 9
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    }
  ]
  
  const getMentorsScores = mentors => {
    let mentorsQty = mentors.length
    let htmlTotal = 0;
    let cssTotal = 0;
    let jsTotal = 0;
    let reactTotal = 0;
    mentors.forEach(mentor => {
      // console.log( mentor.scores )
      let scores = mentor.scores
      scores.forEach(score => {
        let signature = score.signature
        // console.log( 'signature', signature )
        let value = score.score
        // console.log( 'value', value)
        switch (signature) {
          case 'HTML':
            htmlTotal += value
            break
  
          case 'CSS':
            cssTotal += value
            break
  
          case 'JS':
            jsTotal += value
            break
  
          case 'ReactJS':
            reactTotal += value
            break
  
          default:
          // console.log("Asignatura no registrada")
        }
      })
    })
    let htmlAverage = htmlTotal / mentorsQty
    let cssAverage = cssTotal / mentorsQty
    let jsAverage = jsTotal / mentorsQty
    let reactAverage = reactTotal / mentorsQty
    // console.log( htmlAverage )
    // console.log( cssAverage )
    // console.log( jsAverage )
    // console.log( reactAverage )
  
    return { htmlAverage, cssAverage, jsAverage, reactAverage }
  }
  //console.log(getMentorsScores(mentorsArray))

 // FUNCION PARA OBTENER DE UN ARREGLO LA CALIFICACION DE CUALQUIER MATERIA
 const getScoreBySignature = ( arraySignatures , signature ) =>   arraySignatures.filter (  Signature  =>  Signature.signature == signature )[0].score

  const getMentorsScores2 =  arrMentor => {
    let mentorsQty = arrMentor.length
    let htmlTotal = 0;
    let cssTotal = 0;
    let jsTotal = 0;
    let reactTotal = 0;
        arrMentor.forEach ( mentor => {
        htmlTotal += getScoreBySignature (mentor.scores, 'HTML')
        cssTotal += getScoreBySignature (mentor.scores, 'CSS')
        jsTotal += getScoreBySignature (mentor.scores, 'JS')    
        reactTotal += getScoreBySignature (mentor.scores, 'ReactJS')           
        } 
      )
    let htmlAverage = htmlTotal / mentorsQty
    let cssAverage = cssTotal /  mentorsQty
    let jsAverage = jsTotal /  mentorsQty
    let reactAverage = reactTotal /  mentorsQty
    return { htmlAverage, cssAverage, jsAverage, reactAverage }
  }

  console.log("1.- ",  getMentorsScores2(mentorsArray))
  
 /*
    {
                let objSignature = []                
                objSignature = arraySignatures.filter (  Signature  => 
                      {                            
                            return (Signature.signature == signature)                                                           
                      }
                 )
                 console.log(objSignature)
                 return objSignature[0].score
    }
    */

    /*
    console.log ( "calificacion HTML" ,  getScoreBySignature(mentorsArray[0].scores , 'HTML') )
    console.log ( "calificacion CSS" ,  getScoreBySignature(mentorsArray[1].scores , 'CSS') )
    */


    /***    2.- ******************************** */

  const getMentorAverage = scoresArray => {
    let scoreTotal = 0;
    let signaturesQty = scoresArray.length
    scoresArray.forEach(mentorScore => {
      let value = mentorScore.score
      scoreTotal += value
    })
    let mentorAverage = scoreTotal / signaturesQty
    // console.log('promedio del mentor:', mentorAverage )
    return mentorAverage
  }
    // console.log(getMentorAverage(mentorsArray[0].scores))
    // console.log(getMentorAverage(mentorsArray[1].scores))
   
    /*
     // primera version 
     const getMentorAverageUsingReduce =  scoresArray => {
          let arrayOnlyScores = []
          let sumResult = 0
          let average  = 0
          arrayOnlyScores = scoresArray.map( signature => {
                          return signature.score
                            })

          sumResult = arrayOnlyScores.reduce (   (total, calif)  => {
                    return total + calif }                    
              )          
              average = sumResult / scoresArray.length
          return average               

    } */ 

    const getMentorAverageUsingReduce = scoresArray => (    scoresArray.map(signature  =>  signature.score )   ).reduce(  (total, calif) => (total + calif)  ) / scoresArray.length         
    //console.log("getMentorAverageUsingReduce: ", getMentorAverageUsingReduce(mentorsArray[0].scores))

    const printAveragePerMentor = arrMentors =>  arrMentors.forEach(   mentor =>  console.log( "2.-",  mentor.name,  getMentorAverageUsingReduce(mentor.scores))   )        
    printAveragePerMentor(mentorsArray)

    
      /*******************************gti* */



  
    /** 3.-     ****************************** */
  const createLabelsArray = mentorsData => {
    let labelsArray = []
    mentorsData.forEach(mentor => {
      let mentorName = mentor.name
      let mentorAverage = getMentorAverage(mentor.scores)
      console.log('name ', mentorName, 'average ', mentorAverage)
      let label = `Hola, soy ${mentorName} y mi promedio es de ${mentorAverage}`
      labelsArray.push(label)
    })
    console.log(labelsArray)
    return labelsArray
  }

  /*  1a version
  const createLabelsArrayUsingMap = mentorsData => {
      return   mentorsData.map(  (mentor) => {
                  return `Hola, soy ${mentor.name} y mi promedio es de ${getMentorAverage(mentor.scores)}`       
               })
  }
  console.log("createLabelsArrayUsingMap " , createLabelsArrayUsingMap( mentorsArray ))
  */
  const createLabelsArrayUsingMap = mentorsData =>  mentorsData.map(  (mentor) => `Hola, soy ${mentor.name} y mi promedio es de ${getMentorAverage(mentor.scores)}` )
  console.log( "3.- createLabelsArrayUsingMap", createLabelsArrayUsingMap( mentorsArray ))

  /******************************** */



  /***  4.----     ***************************** */  
  const getHighestAverages = mentorsData => {
    let highestsAverages = []
    mentorsData.forEach(mentor => {
      let average = getMentorAverage(mentor.scores)
      console.log(average)
  
      average > 9 && highestsAverages.push(mentor)
    })
    console.log(highestsAverages)
    return highestsAverages
  }

  /*  1a version
  const getHighestAveragesUsingFilter = mentorsData =>{
      return mentorsData.filter (  mentor => {
              return getMentorAverage(mentor.scores) > 9 
     } )  
  }
  console.log( "getHighestAveragesUsingFilter" ,  getHighestAveragesUsingFilter( mentorsArray ))
  */
  const getHighestAveragesUsingFilter = mentorsData =>  mentorsData.filter(  mentor =>  getMentorAverage(mentor.scores) > 9 )    
  console.log( "4.- getHighestAveragesUsingFilter ", getHighestAveragesUsingFilter( mentorsArray ))

   /******************************** */

  
/*
    crear un nuevo array con las inciales de cada mentor
    [
      "I. S. M."
    ]
  */

    /* crear un nuevo array con los mentores cuyo nombre comience con <vocal></vocal>

  */


    const getMentorInitials = mentorsData => {  
              let mentorName  
              let initials = ""  
              let arrayInitials =  mentorsData.map (  mentor => {
                          mentorName = mentor.name.split(" ") 
                           initials = ""
                           mentorName.forEach ( partName => {
                                        console.log(partName)    
                                        initials = initials + partName.charAt(0) + "."  
                                      }
                            )
                            return initials                   

                      }  )
              return arrayInitials
    }

    console.log( getMentorInitials(mentorsArray))
  
  
  // getHighestAverages(mentorsArray)
  
  //createLabelsArray(getHighestAverages(mentorsArray))
  
  //createLabelsArray( mentorsArray )
  
  //getMentorsScores( mentorsArray )
  
  
  
  
  let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 2000000000,
        reproductions: 8000,
      }
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      }
    }, {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      }
    }, {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      }
    }, {
      name: "Daze",
      band: "Poets of the Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      }
    }, {
      name: "The Sweet Scape",
      band: "Poets of the Fall",
      releaseYear: "2018",
      statistics: {
        likes: 2626856,
        reproductions: 2424568,
      }
    }
  ]
  
  /*agrupar únicamente los nombres de las bandas, sin repeticiones*/
  
  /*
  ejercicio 1
    Agrupar las canciones de cada banda
  */
  

  const getBandNames = bands =>{
    let bandNames =[]
    bands.forEach(bandN =>{
      let bandName = bandN.band
      if(!bandNames.includes(bandName))
      bandNames.push(bandName)
    })
    return bandNames
  }

  /*
  console.log( "ej1.- Nombres de las bandas")
  console.log(getBandNames(songsData))
*/



  /* ejercicio 2:
  Agrupar las canciones de cada banda, 
  OR: la funcion recibe el array de bandas con nombres unicos del 1er. ejercicio
  */
  const getBandSongs = (arrayBandsNames, arraySongs) =>{
      let bandSongs = []     // arreglo final para guardar la banda con su arreglo de canciones
      let songs = []         // arreglo auxiliar para guardar las canciones de la banda
      let objBandSongs = {}   // objeto para guardar el nombre de la banda y su arreglo de canciones
  
      arrayBandsNames.forEach( bandName=> {     //por cada nombre de banda en el array de bandas de la funcion anterior que recibo como param
          songs =[]
          objBandSongs = {}                      // limpio los arreglos para que en cada vuelta esten vacios y no concatene lo del anterior
          /*
          for(i=0; i< songsData.length; i++){
              if(songsData[i].band == bandName)     // cambio el for a petición de Israel
              songs.push(songsData[i].name)
          } 
          */
          arraySongs.forEach(  song => {     // recorro el arreglo de las canciones de Israel para comparar
                  // pregunto si el nombre de la banda de la cancion es igual al nombre de la banda de cada iteracion
                /*  
                if ( song.band == bandName )
                 {
                  songs.push(song.name)       // si es igual, meto el nombre de la cancion en el arreglo auxiliar.
                 }
                 */

                song.band == bandName && songs.push(song.name) 
                  
            } )
                                            // cuando termino de recorrer el arreglo de Israel, ya se que canciones son de cada banda
          objBandSongs.band = bandName      // entonces en el objeto vacio agrego el nombre de la banda
          objBandSongs.listSongs = songs    // y tambien agrego el arreglo auxiliar de canciones
  
          bandSongs.push(objBandSongs)      // por ultimo agrego ese objeto construido al arreglo de bandsongs.
      })
      return bandSongs                      // al final la funcion regresa el arreglo [  { band: NombreBanda ,  listsongs: [ canciones ] }  ]   
  }
  /*
  console.log( "ej2.- Canciones por Banda")
  console.log( getBandSongs(getBandNames(songsData),songsData ))  // 
  */
  
  
  /* 
  /*saber cuál es la canción con más reproducciones
  ( nombre de la canción y nombre de la banda)
  */
  const getMostListened =   arraySongsData => {
      let mostListened = {}    // objeto vacio para  almacenar los datos de la cancion mas escuchada
      let reproductions = 0   // variable para ir almacenando al  de mayor reprod. y comparando el numero de reproducciones  de cada cancion
  
      arraySongsData.forEach( song => {     // por cada cancion (song) en el arreglo de Israel 
  
              if (song.statistics.reproductions >  reproductions )   // accedemos a la prop. reproducion de estadisticas   
              {                                                     // y compararamos si reproduccion de la cancion es mayor a la var aux 
                                                                  // reproduciones. La 1a vez entrara porque esta en 0 y las 
                                                                  // subsecuentes dependerá del valor que haya almacenado vs la 
                                                                  // siguiente iteracion
  
                      mostListened = song                  // Si la condidcion se cumple, asigno al objeto auxiliar el objeto cancion actual
                      reproductions = song.statistics.reproductions   // almaceno las reproducciones para las comparaciones siguientes
              }          
          }
      )
            // al final despues de iterar en cada elemento, la variable mostListened contendrá el objeto Cancion con mayor reproduccion 
      // console.log( "ej3: Cancion mas escuchada (reproductions) '" + mostListened.name + "' de la banda '" + mostListened.band + "'"  )
      return mostListened    // este seria el objeto que regresa la funcion en caso de que lo quiera usar desde fuera e imprimir los valores 
  }
  getMostListened(songsData)

  let theMostListened = getMostListened(songsData)

  // console.log( "ej3 fuera f(x): Cancion mas escuchada (reproductions) '" + theMostListened.name + "' de la banda '" + theMostListened.band + "'"  )
  
  
    /*
    saber cuál es la canción con más likes
    ( nombre de la canción y nombre de la banda)
    */  
  
  const getMostLiked =   arraySongsData => {
  
    let mostLiked = {}
    let likes = 0
  
    arraySongsData.forEach( song => {   
  
        if (song.statistics.likes >  likes )
        {
              mostLiked = song
              likes = song.statistics.likes
        }  
        
      }
      
    )
    // console.log( "ej4: Cancion mas gustada (likes) '" + mostLiked.name + "' de la banda '" + mostLiked.band + "'"  )
    return mostLiked
  }
  
  getMostLiked(songsData)