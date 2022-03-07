import {expect} from "chai";
import {TrackingInformation,Shipment} from "./7-6_inlineClass.js";

describe('7-6 클래스 인라인화', () => {
    it('default', () => {
        const aTrackingInformation = new TrackingInformation();
        aTrackingInformation.shippingCompany = 'CJ택배';
        aTrackingInformation.trackingNumber = '12345678';

        const aShipment = new Shipment();
        aShipment.trackingInformation = aTrackingInformation;

        expect(aShipment.trackingInfo).equals('CJ택배: 12345678');
    });
});