const currentPath = window.location.pathname.split('/').pop(); // Lấy tên file: index.html, order.html
const links = document.querySelectorAll('.nav_link');
console.log(links)
links.forEach(link => {
    const linkPath = link.getAttribute('href').replace('./', '');

    if (linkPath === currentPath) {
        link.classList.remove('text-white');
        link.classList.add('text-[#FF4D48]');
    } else {
        link.classList.remove('text-[#FF4D48]');
        link.classList.add('text-white');
    }
});