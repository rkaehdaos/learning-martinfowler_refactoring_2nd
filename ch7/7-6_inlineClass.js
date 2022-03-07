class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;} //배송 회사
    set shippingCompany(arg) {this._shippingCompany=arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber=arg;}
    get display() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}
class Shipment {
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber=arg;}
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany=arg}
    get trackingInfo(){return `${this.shippingCompany}: ${this.trackingNumber}`;}
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation=aTrackingInformation;
    }
}

export {TrackingInformation, Shipment};