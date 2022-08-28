const SIDE_MENU = document.querySelector(".sideMenu")
const USER_MENU = document.querySelector(".usersMenu")

const SIDE_MENU_BUTTON = document.getElementById("menu-button")
const USERS_MENU_BUTTON = document.getElementById("user-list-button")
const BACK_BUTTON = document.querySelectorAll(".backButton")

const PRODUCT_LIST_ELEMENTS = document.querySelectorAll("#product-list .listElement")
const USER_LIST_ELEMENTS = document.querySelectorAll("#user-list .listElement")

BACK_BUTTON.forEach((element) => {
    element.addEventListener("click", fadeInOut)
})

SIDE_MENU_BUTTON.addEventListener("click", fadeInOut)

USERS_MENU_BUTTON.addEventListener("click", fadeInOut)

PRODUCT_LIST_ELEMENTS.forEach((elemento) => {
    elemento.addEventListener("click", goToProduct);
})

USER_LIST_ELEMENTS.forEach((elemento) => {
    elemento.addEventListener("click", goToUser)
})

function fadeInOut(event) {
    let component = event.target.parentElement.parentElement;

    if (event.target.classList.contains("backButton")) {

        if (component.classList.contains("sideMenu")) {
        component.classList.add("hidden");
        component.classList.add("l");
        }

        if (component.classList.contains("usersMenu")) {
            component.classList.add("hidden");
            component.classList.add("r");
        }
    }


    if (event.target.id.toString() === "menu-button") {
        showSideMenu();
    }

    if (event.target.id.toString() === "user-list-button") {
        console.log(event.target.id)
        showUserMenu();
    }
}

function showSideMenu() {
    if (SIDE_MENU.classList.contains("hidden")) {
        SIDE_MENU.classList.remove("hidden")
        SIDE_MENU.classList.remove("l")
    }
}

function showUserMenu() {
    if (USER_MENU.classList.contains("hidden")) {
        USER_MENU.classList.remove("hidden")
        USER_MENU.classList.remove("r")
    }
}

function goToProduct(event) {
    window.location = "../Pages/ProductDetails.html"
}

function goToUser(event) {
    window.location = "../Pages/UserDetails.html"
}