const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {
    let test_paint;
    beforeEach(function () {
        test_paint = new Paint(5)
    })

    it('have a number of litres of paint', function () {
        const paint = new Paint(5); //Arrange
        const actual = test_paint.litres; // Act
        assert.strictEqual(actual, 5); //Assert

    });
    xit('be able to check if it is empty', function () {
        const actual = test_room.painted; // Act
        assert.strictEqual(actual, false); // Assert

    });
    xit('be able to empty itself of paint', function () {
        test_room.paint()
        const actual = test_room.painted; //Act
        assert.strictEqual(actual, true); //Assert


    });


});