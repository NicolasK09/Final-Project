let mobMenu = document.querySelector(".menu");
let burger = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-circle-xmark");

burger.addEventListener("click", () => {
    mobMenu.classList.add("diss_app");
    burger.mediamob.display = "none";
    xMark.mediamob.display = "block";
});

xMark.addEventListener("click", () => {
    mobMenu.classList.remove("diss_app");
    xMark.mediamob.display = "none";
    burger.mediamob.display = "block";
});