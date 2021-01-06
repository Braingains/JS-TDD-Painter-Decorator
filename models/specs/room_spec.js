const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {
    let test_room;
    beforeEach(function () {
        test_room = new Room(25)
    })


    it('should have an area in sq metres', function () {
        // const room = new Room(25); //Arrange
        const actual = test_room.area; // Act
        assert.strictEqual(actual, 25); //Assert

    });
    it('should start not painted', function () {
        const actual = test_room.painted; // Act
        assert.strictEqual(actual, false); // Assert

    });
    it('should be able to be painted', function () {
        test_room.paint()
        const actual = test_room.painted; //Act
        assert.strictEqual(actual, true); //Assert


    });


});