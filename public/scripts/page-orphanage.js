//controls to map
// const options ={
//     dragging: false,
//     touchZoom: false,
//     doubleClickZoom: false,
//     scrollWheelZoom: false,
//     zoomControl: false
// }

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// create map
          //L.map('mapid', options) to disable the controls
const map = L.map('mapid').setView([lat, lng], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor:[170, 2]
});

//create and add marker
L.marker([lat, lng], { icon })
.addTo(map);

/*mallery images*/

function selectImage(event) {
    const button = event.currentTarget;

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    
    // selecionar a image clicada
    const image = button.children[0];
    
    //console.log(image);
    const imageContainer = document.querySelector(".orphanege-details > img");
    imageContainer.src = image.src;

    // adicinar a class active 
    button.classList.add("active");
};