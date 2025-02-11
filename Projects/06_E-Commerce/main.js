1 
let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("Data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) => {
        let { id, name, desc, img, price } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `<div id=product-id-${id} class="item">
<img width="220" src=${img}>
<div class="details">
    <h2> ${name}</h2>
    <p>${desc}.</p>
    <div class="price-quantity">
        <h2>$ ${price} </h2>
        <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"> </i>
            <div id=${id} class="quantity"> 
            ${search.item === undefined ? 0 : search.item} </div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"> </i>
        </div>
    </div>
</div>
</div> `
    }).join(" "));
};

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        })
    }
    else {
        search.item += 1;
    }
    update(selectedItem.id);
    localStorage.setItem("Data", JSON.stringify(basket));
}

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search === undefined)
        return;
    else if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0)
    localStorage.setItem("Data", JSON.stringify(basket));

};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculations();
}

generateShop();

let calculations = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}

calculations();
