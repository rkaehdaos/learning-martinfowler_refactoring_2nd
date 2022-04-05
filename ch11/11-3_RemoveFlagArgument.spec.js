import {expect} from "chai";
import {deliveryDate, Order} from "./11-3_RemoveFlagArgument.js";

describe('rush 계산', () => {

    it('MA,CT는 2', () => {
        expect(deliveryDate(new Order(1, "주문1", "MA"), true)).to.equal(2);
        expect(deliveryDate(new Order(2, "주문2", "CT"), true)).to.equal(2);
    });
    it('NY,NH는 3', () => {
        expect(deliveryDate(new Order(3, "주문3", "NY"), true)).to.equal(3);
        expect(deliveryDate(new Order(4, "주문4", "NH"), true)).to.equal(3);
    });
    it('그외는 4', () => {
        expect(deliveryDate(new Order(5, "주문5", "WA"), true)).to.equal(4);
        expect(deliveryDate(new Order(6, "주문6", "ME"), true)).to.equal(4);
    });
});

describe('rush 아닐 때', () => {

    it('MA,CT, NY는 4', () => {
        expect(deliveryDate(new Order(11, "주문11", "MA"), false)).to.equal(4);
        expect(deliveryDate(new Order(12, "주문12", "CT"), false)).to.equal(4);
        expect(deliveryDate(new Order(13, "주문13", "NY"), false)).to.equal(4);
    });
    it('ME,NH는 5', () => {
        expect(deliveryDate(new Order(14, "주문14", "ME"), false)).to.equal(5);
        expect(deliveryDate(new Order(15, "주문15", "NH"), false)).to.equal(5);
    });
    it('그외는 6', () => {
        expect(deliveryDate(new Order(16, "주문16", "WA"), false)).to.equal(6);
        expect(deliveryDate(new Order(17, "주문17", "DE"), false)).to.equal(6);
    });
});