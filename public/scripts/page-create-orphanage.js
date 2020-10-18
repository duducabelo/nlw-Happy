// create map         
const map = L.map('mapid').setView([-23.5731989,-46.730129], 15);

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

let marker;

//create and add marker
map.on('click', (event) => {
    console.log(event);
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icom
    marker && map.removeLayer(marker);

    // add icon Layer
    marker =L.marker([lat, lng], {icon}).addTo(map);

});

// add photos 
function addPhotoField() {
    
    // container fotos
    const containerImages = document.querySelector('#images');
   
    // container para para clonar
    const newImages = document.querySelectorAll('.new-upload');
    
    // realizar clonar da última fotos
    const cloneImage = newImages[newImages.length - 1].cloneNode(true);
    
    // verificas se container esta vazio se estiver não clonar
    const verificar = cloneImage.children[0];
    
    if(verificar.value == ''){
        return
    };
   
    // limpar conteiner antes de clonar
    verificar.value = '';
    
    // adiciona a clonar ao container 
    containerImages.appendChild(cloneImage);
};

function deleteField(event){

   const span = event.currentTarget;

   const newImages = document.querySelectorAll('.new-upload');

   if (newImages.length < 2) {
       //limpar o campo
       span.parentNode.children[0].value = ''; 
       return;
   }
   // deletar o campo
   span.parentNode.remove();   
};

// select yes or no console.log()
function toggleSelect(event) {

    // retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    });
   
    // colocar .acrtive no botão clicado
    const button = event.currentTarget;
    button.classList.add('active');
    
    // atualizar o input com o type hidden com o value selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;   
};

function validatMap(event) {
    
    const map = document.forms['validatForm'] ['lat'].value;

    if (map == '') {
        event.preventDefault()
        alert('Faltou colocar a localização no Map');
        //document.querySelector('#select-point').innerHTML = 'Faltou colocar a localização no Map';
        return false;
    }
};