const btn = document.querySelector(".hanburger");
const main = document.querySelector(".navbar");

btn.addEventListener('click', () => {
    main.classList.toggle("open");

});