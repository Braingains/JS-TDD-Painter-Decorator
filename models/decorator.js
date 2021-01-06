const Decorator = function () {
    this.stock = []
}

Decorator.prototype.addCanToStock = function (paintCan) {
    this.stock.push(paintCan)
}

module.exports = Decorator;