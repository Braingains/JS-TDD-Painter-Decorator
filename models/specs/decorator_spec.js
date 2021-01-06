const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');


describe('Decorator', function () {
    let test_decorator;
    beforeEach(function () {
        test_decorator = new Decorator();
        test_paint = new Paint(5);
    })



    it('start with an empty paint stock', function () {
        const actual = test_decorator.stock; // Act
        assert.deepStrictEqual(actual, []); //Assert

    });
    it('be able to add a can of paint to paint stock', function () {
        test_decorator.addCanToStock(test_paint);
        const actual = test_decorator.stock.length // Act
        assert.strictEqual(actual, 1); // Assert

    });
    xit('be able to calculate total litres paint it has in stock', function () {
        test_paint.use();
        const actual = test_paint.empty; //Act
        assert.strictEqual(actual, true); //Assert


    });
    xit('be able to calculate whether is has enough paint to paint a room', function () {
        test_paint.use();
        const actual = test_paint.empty; //Act
        assert.strictEqual(actual, true); //Assert


    });
    xit('be able to paint room if has enough paint in stock', function () {
        test_paint.use();
        const actual = test_paint.empty; //Act
        assert.strictEqual(actual, true); //Assert


    });


});