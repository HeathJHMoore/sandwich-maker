const breads = {
    Wheat: 1.00,
    White: 1.00,
    MultiGrain: 1.50,
    Ciabatta: 1.75,
    Sourdough: 1.75
};

const addBread = (event) => {
    newIngredient = {};
    const breadType = event.target.id;
    const breadPrice = breads[breadType];
    if (event.target.checked === True) {

    } else if (event.target.checked === False) {
        
    }
}



export { getBreads };