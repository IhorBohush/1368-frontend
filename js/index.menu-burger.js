/** Alisa Korniienko */
document.querySelector(".header__burger").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("open");
    document.querySelector(".header__socials").classList.toggle("open");
});
