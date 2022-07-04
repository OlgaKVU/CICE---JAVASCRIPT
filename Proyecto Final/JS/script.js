


fetch('http://makeup-api.herokuapp.com/api/v1/products.json').then((data)=>{
    //  console.log(data);
    return data.json();

}).then((completedata)=>{
//    console.log(completedata[2].brand);
//    document.getElementById('root').
//    innerHTML=completedata[2].brand;
let data1 = " ";
completedata.map((values)=>{
    data1 +=`<div class="card">
    <h1 class="titel">${values.brand}</h1>
    <img src=${values.image_link} alt="img" class="images">
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="price">${values.price}</p>
</div>`
}
)

document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
});

// document.querySelector("#search").addEventListener("click",getBrand);

// function getBrand(e){



// const brand = document.querySelector("#searchBox");


// fetch(`http://makeup-api.herokuapp.com/api/v1/products.json/`)
// .then((response)=>response.json())
// .then((data)=>{

// document.querySelector(".brandBox").innerHTML = 
//     `<div class="card">
//     <h1 class="titel">${data.brand}</h1>
//     <img src=${data.image_link} alt="img" class="images">
//     <p>${data.description}</p>
//     <p class="category">${data.category}</p>
//     <p class="price">${data.price}</p>
// </div>`;
// })

// .catch((err)=>{
//     console.log("Brand not found",err);
// });

// e.preventDefault();
// }  