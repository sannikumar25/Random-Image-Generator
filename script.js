const { response } = require("express");

function fetchDogImage (){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>response.json())
    .then(data=>{
        const img = document.getElementById('randomImage')
        img.src = data.message;
        img.style.display = "block"
        

    })
}