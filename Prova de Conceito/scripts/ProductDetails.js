const BUTTON = document.querySelector(".subTopMenu button");

BUTTON.addEventListener("click", showProductsDetail);

function showProductsDetail() {
    let productDetails = document.querySelector(".productInfo");

    if (productDetails.classList.contains("hidden")) {
        productDetails.classList.remove("hidden")
    }
    else {
        productDetails.classList.add("hidden")
    }
}

