let url = 'https://api.fbi.gov/wanted/v1/list'
let array = []

fetch(url).then((respuesta)=> respuesta.json()).then((datos) =>{     //el fetch nos devuelve una promesa, cuando se cumpla, el then() recibe como primer argumento es un 'callback'
    array = datos.results                                           //la funcion .json nos devuelve una promesa; cuando se cumpla (then), le pasamos otro argumento (otro callback - al que llamamos 'datos') al siguiente then 
    console.log(datos)
    console.log(array)

    let impresion = ''

    
    for (let i = 0; i < array.length; i++) {
            impresion += `
            <div class= "card">
            <img src ="${array[i].formats["image/jpeg"]}"  heigh="350px alewidth="150px" "alt = "${array[i].title}">
            <h3>${array[i].title}</h3>
            <p>Autor: ${array[i].authors[0].name}</p>
            </div>`
}

let respuesta = document.createElement('div')
respuesta.setAttribute('class', 'container')
document.body.appendChild(respuesta)

respuesta.innerHTML = impresion
})