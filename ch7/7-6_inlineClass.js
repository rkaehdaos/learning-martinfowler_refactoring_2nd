class TrackingInformation {
    get shippingCompany() {return this._shippingCompany;} //배송 회사
    set shippingCompany(arg) {this._shippingCompany=arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber=arg;}
    get display() {
        return `${this.shippingCompany}: ${this._trackingNumber}`;
    }
}
class Shipment {
    get trackingNumber() {return this._trackingInformation.trackingNumber;}
    set trackingNumber(arg) {this._trackingInformation.trackingNumber=arg;}
    get shippingCompany() {return this._trackingInformation.shippingCompany;}
    set shippingCompany(arg) {this._trackingInformation.shippingCompany=arg}
    get trackingInfo(){return this._trackingInformation.display;}
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation=aTrackingInformation;
    }
}

export {TrackingInformation, Shipment};