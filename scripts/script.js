// JavaScript Document
console.log("hi");

const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('overlay');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
// const slidesContainer = document.getElementById("slides-container");
// const slide = document.querySelector(".slide");
// const prevButton = document.getElementById("slide-arrow-prev");
// const nextButton = document.getElementById("slide-arrow-next");


// nextButton.addEventListener("click", () => {
// console.log("rechts");
//   const slideWidth = slide.clientWidth;
    
//   slidesContainer.scrollLeft += slideWidth;

// });

// prevButton.addEventListener("click", () => {
// console.log("links");
//   const slideWidth = slide.clientWidth;

//   slidesContainer.scrollLeft -= slideWidth;

// });






// const track = document.querySelector("trackid");
// const slideWidth = track.querySelector("slide").offsetWidth;

// document.querySelector("next").addEventListener("click", () => {
//     console.log("rechts");
//   track.scrollBy({ left: slideWidth, behavior: "smooth" });
// });

// document.querySelector("prev").addEventListener("click", () => {
//     console.log("links");
//   track.scrollBy({ left: -slideWidth, behavior: "smooth" });
// });


let currentIndex = 0;
const images = document.querySelectorAll('.carouselimg');
const totalImages = images.length;
const carouselImages = document.getElementById('carouselImages');
const indicators = document.querySelectorAll('.indicator');
 
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
               
    indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
    });}
 
document.getElementById('nextbutton').addEventListener('click', () => {
    console.log("rechts");
    currentIndex = (currentIndex + 1 ) % totalImages;
    updateCarousel();
});
 
document.getElementById('prevbutton').addEventListener('click', () => {
    console.log("links");
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

