

        let breeds = window.prompt("Choose a new dog:")
        
        fetch('https://dog.ceo/api/breeds/list/all')
        
        .then((respuesta)=>respuesta.json())
        .then(function guardarDatos(datos){
            if(datos.error!== undefined){console.log("Upsss")}else{

            }
                
            })
    




