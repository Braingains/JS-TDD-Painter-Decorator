const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {



    it('should have an area in sq metres', function () {
        const room = new Room(25); //Arrange
        const actual = room.area; // Act
        assert.strictEqual(actual, 25); //Assert

    });
    xit('should start not painted', function () {


    });
    xit('should be able to be painted', function () {


    });


});