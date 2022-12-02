const imageContainer = document.getElementById("image-container")
const loader = document.getElementById('loader')

let photosArray = []

// Unsplash API
const count = 30
const apiKey = '7lm4Bz4dQSwxBCeK7rfznB1ZfT7wHv76itxBEsUirGs'
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query='animals`


function displayPhotos() {
    //Run function for each object in PhotosArray

    photosArray.map((photo) => {
        //creeate <a> to link to Unsplash

        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_bank' )

        //creat <img> for photo

        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)


        //put <img> inside <a> then put both inside imageContainer Element
       item.appendChild(img)
        imageContainer.appendChild(item)

    })
}

// Get Photos from Unsplash API

async function getPhotos() {
    try{
    const response = await fetch(apiUrl);
    photosArray = await response.json()
    displayPhotos();
    } catch(error) {
    //Catch Error
    }
    }

//check to see if scrolling nerar bottom of page, Load More Photos

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        getPhotos()
    }
})


//On Load
getPhotos()