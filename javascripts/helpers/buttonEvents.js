import util from './util.js';

const eventListeners = () => {
    document.getElementById('Wheat').addEventListener('click',util.addBread);
    document.getElementById('White').addEventListener('click',util.addBread);
    document.getElementById('MultiGrain').addEventListener('click',util.addBread);
    document.getElementById('Ciabatta').addEventListener('click',util.addBread);
    document.getElementById('Sourdough').addEventListener('click',util.addBread);
}

export default { eventListeners };