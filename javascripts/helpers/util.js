import breads from '../components/bread.js'
import meats from '../components/meat.js'
import cheeses from '../components/cheese.js'
import condiments from '../components/condiments.js'
import veggies from '../components/veggies.js';

let cart = [];


const totalBuilder = () => {
    let totalPrices = [];
    cart.forEach((member) => {
        totalPrices.push(member.ingredientPrice);
    })
    let total = 0;
    console.error(totalPrices);
    totalPrices.forEach((price) => {
        total = total + price;
    });
    return total;
};

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
    domString += '<h2 class="row d-flex justify-content-center" style="background-color: black; color: white;">Your Order</h2>'
    array.forEach((item) => {
        domString += `<div class="row d-flex justify-content-center cart-ingredients">`
        domString += `${item.ingredientType} ${item.ingredientPrice}`;
        domString += `</div>`
    })
    domString += `<div class="row d-flex justify-content-center" style="background-color: black; color: white;">Total: $${totalBuilder()}</div>`
    printToDom('cart-container', domString);
}


const addingredient = (event) => {
    if (event.target.checked) {
        const newIngredient = {};
        newIngredient.ingredientType = event.target.id;
        if (event.target.name === 'breads') {
            newIngredient.ingredientPrice = breads.breads[event.target.id];
        } else if (event.target.name === 'meats') {
            newIngredient.ingredientPrice = meats.meats[event.target.id];
        } else if (event.target.name === 'cheeses') {
            newIngredient.ingredientPrice = cheeses.cheeses[event.target.id];
        } else if (event.target.name === 'condiments') {
            newIngredient.ingredientPrice = condiments.condiments[event.target.id];
        } else if (event.target.name === 'veggies') {
            newIngredient.ingredientPrice = veggies.veggies[event.target.id];
        }
        addToCart(newIngredient);
    } else {
        removeFromCart(event.target.id);
    };
};





export default { addingredient };
