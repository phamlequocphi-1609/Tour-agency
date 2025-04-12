// const btnMenu = document.querySelector(".btn_menu");
// const menu = document.querySelector(".menu");
// const overlay = document.querySelector(".overlay");

// btnMenu.addEventListener("click", function () {
//     menu.classList.toggle("hidden");
//     overlay.classList.toggle("hidden");
//     menu.classList.toggle("animate-slide-in");
// });

// overlay.addEventListener("click", function () {
//     menu.classList.add("hidden");
//     overlay.classList.add("hidden");
//     menu.classList.remove("animate-slide-in");
// });


const menuBtn = document.querySelector(".btn_menu");
const menu = document.querySelector(".menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.add("hidden");
});
