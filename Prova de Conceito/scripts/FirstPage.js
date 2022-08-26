const SIDEMENU = document.querySelector(".sideMenu");
const BACK_BUTTON = document.getElementById("back-button")
const MENU_BUTTON = document.getElementById("menu-button")

BACK_BUTTON.addEventListener("click", fadeInOut)
MENU_BUTTON.addEventListener("click", fadeInOut)

function fadeInOut() {
    if (SIDEMENU.classList.contains("hidden")) {
        SIDEMENU.classList.remove("hidden")
    }
    else {
        SIDEMENU.classList.add("hidden")
    }
}