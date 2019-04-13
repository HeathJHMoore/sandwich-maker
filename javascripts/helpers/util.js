import bread from '../components/bread.js'

let cart = [];

const addToCart = (newIngredient) => {
    cart.push(newIngredient);
    cartStringBuilder(cart);
}

const removeFromCart = (ingredientType) => {
    let newCart = [];
    cart.forEach((item) => {
        if (item.ingredientType !== ingredientType) {
            newCart.push(item);
        }
    });
    cart = newCart;
    cartStringBuilder(cart);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const cartStringBuilder = (array) => {
    let domString = ``
    array.forEach((item) => {
        domString += `<div class="row">`
        domString += `${item.ingredientType} ${item.ingredientPrice}`;
        domString += `</div>`
    })
    printToDom('cart-container', domString);
}

const addBread = (event) => {
    if (event.target.checked) {
        const newIngredient = {};
        newIngredient.ingredientType = event.target.id;
        newIngredient.ingredientPrice = bread.breads[event.target.id];
        addToCart(newIngredient);
    } else {
        removeFromCart(event.target.id);
    };
};

export default { addBread };
