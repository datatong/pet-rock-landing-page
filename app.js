const gallerySlide = document.querySelector('.gallery-slide');
const galleryImages = document.querySelectorAll('.gallery-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = galleryImages[0].clientWidth;

gallerySlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', ()=> {
    gallerySlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    //console.log(counter);
    
});