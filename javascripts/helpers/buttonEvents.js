import util from './util.js';

const eventListeners = () => {
    document.addEventListener("click", util.addingredient);
    // document.getElementById('Wheat').addEventListener('click',util.addingredient);
    // document.getElementById('White').addEventListener('click',util.addingredient);
    // document.getElementById('MultiGrain').addEventListener('click',util.addingredient);
    // document.getElementById('Ciabatta').addEventListener('click',util.addingredient);
    // document.getElementById('Sourdough').addEventListener('click',util.addingredient);
}

export default { eventListeners };