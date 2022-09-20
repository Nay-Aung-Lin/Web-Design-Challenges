'use strict';

const photos = document.querySelectorAll('.photo');
console.log(photos);

photos.forEach(photo => {
    photo.addEventListener('click',() => {
    removeAtive();
    photo.classList.add('active');
    })
})

function removeAtive(){
    photos.forEach(photo => {
        photo.classList.remove('active');
    })
}