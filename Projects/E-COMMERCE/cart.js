let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculations = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculations();

let generateCartItem = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            return `
            <div class="cart-item"> Hello</div>
            `
        }))
    }
    else {
        shoppingCart.innerHTML = ` `;
        label.innerHTML = `
        <h2> Cart is Empty </h2>
        <a href="index.html">
        <button class="homeBtn"> Back to Home </button> 
        </a>`
    }
}

generateCartItem();