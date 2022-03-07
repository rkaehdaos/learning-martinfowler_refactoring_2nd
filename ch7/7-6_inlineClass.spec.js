import {expect} from "chai";
import {Shipment, TrackingInformation} from "./7-6_inlineClass.js";

describe('7-6 클래스 인라인화', () => {
    it('default', () => {
        const aShipment = new Shipment();
        aShipment.trackingInformation = new TrackingInformation();
        aShipment.shippingCompany= 'CJ택배';
        aShipment.trackingNumber = '12345678';
        expect(aShipment.trackingInfo).equals('CJ택배: 12345678');
    });
});