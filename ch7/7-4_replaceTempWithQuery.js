class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }
    get price() {return this.basePrice * this.discountFactor;}
    get basePrice() {return this._quantity * this._item.price;}
    get discountFactor() {return (this.basePrice > 1000) ? 0.95 : 0.98;}
}

export {Order};