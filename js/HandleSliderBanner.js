const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
        slide.style.zIndex = i === index ? "10" : "0";
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("opacity-[50%]", i !== index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


setInterval(nextSlide, 5000);

showSlide(currentIndex);





const carouselItems = document.querySelectorAll('.item-box');
const carouselPrev = document.getElementById('carousel-prevBtn');
const carouselNext = document.getElementById('carousel-nextBtn');

let carouselIndex = 0;

function getItemsPerPage() {
    return window.innerWidth >= 1024 ? 3 : 1;
}

function showCarouselItems() {
    const perPage = getItemsPerPage();
    carouselItems.forEach((item, index) => {
        if (index >= carouselIndex && index < carouselIndex + perPage) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

carouselPrev.addEventListener('click', () => {
    const perPage = getItemsPerPage();
    carouselIndex = Math.max(carouselIndex - perPage, 0);
    showCarouselItems();
});

carouselNext.addEventListener('click', () => {
    const perPage = getItemsPerPage();
    const maxIndex = carouselItems.length - perPage;
    carouselIndex = Math.min(carouselIndex + perPage, maxIndex);
    showCarouselItems();
});

window.addEventListener('resize', () => {
    carouselIndex = 0;
    showCarouselItems();
});



showCarouselItems();






const carouselItems1 = document.querySelectorAll('.item-box1');
const carouselPrev1 = document.getElementById('carousel-prevBtn1');
const carouselNext1 = document.getElementById('carousel-nextBtn1');

let carouselIndex1 = 0;



function showCarouselItems1() {
    const perPage = getItemsPerPage();
    carouselItems1.forEach((item, index) => {
        if (index >= carouselIndex1 && index < carouselIndex1 + perPage) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

carouselPrev1.addEventListener('click', () => {
    const perPage = getItemsPerPage();
    carouselIndex1 = Math.max(carouselIndex1 - perPage, 0);
    showCarouselItems1();
});

carouselNext1.addEventListener('click', () => {
    const perPage = getItemsPerPage();
    const maxIndex = carouselItems1.length - perPage;
    carouselIndex1 = Math.min(carouselIndex1 + perPage, maxIndex);
    showCarouselItems1();
});

window.addEventListener('resize', () => {
    carouselIndex1 = 0;
    showCarouselItems1();
});



showCarouselItems1();
