let rand = Math.floor(Math.random() * (500-1) +1)

fetch(`https://api.disneyapi.dev/characters/${rand}`).then((respuesta)=>respuesta.json()).then((datos)=>{

let respuesta = document.createElement('div')
respuesta.innerHTML = `<img src = "${datos.imageUrl}" alt = "${datos.name}" /><h3>${datos.name}</h3><p>ID: ${datos._id}</p>`
if(datos.films.length > 0){
    let lista =''
    for (let i = 0; i < datos.films.length; i++) {
        lista += `<li>${datos.films[i]}</li>` }
        respuesta.innerHTML += `<ol>${lista}</ol>`
        
    }
document.body.appendChild(respuesta)

})