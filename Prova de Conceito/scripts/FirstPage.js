const SIDEMENU = document.querySelector(".sideMenu");
const BACK_BUTTON = document.getElementById("back-button")
const MENU_BUTTON = document.getElementById("menu-button")
const LIST_ELEMENTS = document.querySelectorAll(".elemento-lista")

BACK_BUTTON.addEventListener("click", fadeInOut)
MENU_BUTTON.addEventListener("click", fadeInOut)

LIST_ELEMENTS.forEach((elemento) => {
    elemento.addEventListener("click", goToProduct);
})


function fadeInOut() {
    if (SIDEMENU.classList.contains("hidden")) {
        SIDEMENU.classList.remove("hidden")
    }
    else {
        SIDEMENU.classList.add("hidden")
    }
}

function goToProduct(event) {
    window.location = "../Pages/ProductDetails.html"
}