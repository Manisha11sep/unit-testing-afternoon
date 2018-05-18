const cart = require('./cart')
const cars = require('./data/cars')


describe("Cart Properties", function(){
test("Test the length of array", function(){
    expect(Array.isArray(cart.cart)).toEqual(true);
    expect(cart.cart.length).toEqual(0);
})

test("Test the total property", function(){
    expect(cart.total).toBe(0);

})
})


describe("Cart Methods", function(){
    
})