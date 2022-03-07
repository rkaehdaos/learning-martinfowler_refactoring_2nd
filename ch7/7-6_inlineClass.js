class Shipment {
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber=arg;}
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany=arg}
    get trackingInfo(){return `${this.shippingCompany}: ${this.trackingNumber}`;}
}

export { Shipment};