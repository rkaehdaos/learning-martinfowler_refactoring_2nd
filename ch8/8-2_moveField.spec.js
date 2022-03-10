import{expect} from "chai";
import {Customer,CustomerContract} from "./8-2_moveField.js";

describe('8-2필드옮기기ex1', () => {
    it('default', () => {
        const aCustomer = new Customer('Ahn', 0.3);
        console.log(aCustomer);
        expect(aCustomer.discountRate).equals(0.3);

        aCustomer.becomePreferred();
        // expect(aCustomer.discountRate.toFixed(2)).equals('0.33');
        expect(Math.round(aCustomer.discountRate*100)/100).equals(0.33);
    });
});