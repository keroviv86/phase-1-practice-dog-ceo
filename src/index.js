console.log('%c HI', 'color: firebrick')

init()

function init(){
    fetchDogImg()
    fetchDogBreeds()

}
//challenge 1 add image to DOM using foreach
function fetchDogImg(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res=>res.json())
    // .then(dogData=>console.log(dogData.message))
    .then(dogData=> (dogData.message.forEach(dog=>renderImg(dog))))
}

function renderImg(dog){
    let dogImgContainer = document.getElementById('dog-image-container')
    dogImg = document.createElement('img')
    dogImg.src = dog

    dogImgContainer.appendChild(dogImg)

}

function fetchDogBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(breedData=>console.log((breedData.message)))
    // .then(breedData=>Object.keys(breedData.message).forEach(breeds=>renderBreeds(breeds)))
}

function renderBreeds(breeds){
    let dogBreeds = document.getElementById('dog-breeds')
    let breedType = document.createElement('ul')
    breedType.textContent = breeds

    dogBreeds.append(breedType)
}
