const SIDE_MENU = document.querySelector(".sideMenu")
const USER_MENU = document.querySelector(".usersMenu")
const NEW_USER_MENU = document.getElementById("new-user-menu")
const NEW_PRODUCT_MENU = document.getElementById("new-product-menu")


const SIDE_MENU_BUTTON = document.getElementById("menu-button")
const USERS_MENU_BUTTON = document.getElementById("user-list-button")

const BACK_BUTTON = document.querySelectorAll(".backButton")

const INPUTS = document.querySelectorAll(".menuInput input")
const SHOW_PARTICIPANTS_BUTTON = document.getElementById("show-button")

const NEW_USER_MENU_BUTTON = document.getElementById("add-user-field")
const NEW_PRODUCT_MENU_BUTTON = document.getElementById("add-product-field")

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


INPUTS.forEach((element) => {
    element.addEventListener("blur", (event) => {
        if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add("filled");
        }
        else {
            event.target.nextElementSibling.classList.remove("filled");
        }
    })
})

NEW_USER_MENU_BUTTON.addEventListener("click", () => {
    NEW_USER_MENU.classList.remove("hidden");
    SIDE_MENU.classList.add("hidden")
    SIDE_MENU.classList.add("l")
})

NEW_PRODUCT_MENU_BUTTON.addEventListener("click", () => {
    NEW_PRODUCT_MENU.classList.remove("hidden")
    SIDE_MENU.classList.add("hidden")
    SIDE_MENU.classList.add("l")
})

SHOW_PARTICIPANTS_BUTTON.addEventListener("click", showUsers)



function hideLabel(event) {
    if (event.target.value !== "") {
        event.target.nextElementSibling.classList.add("filled");
    }
    else {
        event.target.nextElementSibling.classList.remove("filled");
    }
}

function showUsers() {
    let lista_de_usuarios = document.getElementById("participants-field");

    if (lista_de_usuarios.classList.contains("hidden")) {
        lista_de_usuarios.classList.remove("hidden")
    }
    else {
        lista_de_usuarios.classList.add("hidden")
    }
}

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

        if (component.classList.contains("menu")) {
            component.classList.add("hidden")
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