import {expect} from "chai";
import {Order, rushDeliveryDate, regularDeliveryDate} from "./11-3_RemoveFlagArgument_hardMode.js";

describe('rush 계산', () => {

    it('MA,CT는 2', () => {
        expect(rushDeliveryDate(new Order(1, "주문1", "MA"))).to.equal(2);
        expect(rushDeliveryDate(new Order(2, "주문2", "CT"))).to.equal(2);
    });
    it('NY,NH는 3', () => {
        expect(rushDeliveryDate(new Order(3, "주문3", "NY"))).to.equal(3);
        expect(rushDeliveryDate(new Order(4, "주문4", "NH"))).to.equal(3);
    });
    it('그외는 4', () => {
        expect(rushDeliveryDate(new Order(5, "주문5", "WA"))).to.equal(4);
        expect(rushDeliveryDate(new Order(6, "주문6", "ME"))).to.equal(4);
    });
});

describe('rush 아닐 때', () => {

    it('MA,CT, NY는 4', () => {
        expect(regularDeliveryDate(new Order(11, "주문11", "MA"))).to.equal(4);
        expect(regularDeliveryDate(new Order(12, "주문12", "CT"))).to.equal(4);
        expect(regularDeliveryDate(new Order(13, "주문13", "NY"))).to.equal(4);
    });
    it('ME,NH는 5', () => {
        expect(regularDeliveryDate(new Order(14, "주문14", "ME"))).to.equal(5);
        expect(regularDeliveryDate(new Order(15, "주문15", "NH"))).to.equal(5);
    });
    it('그외는 6', () => {
        expect(regularDeliveryDate(new Order(16, "주문16", "WA"))).to.equal(6);
        expect(regularDeliveryDate(new Order(17, "주문17", "DE"))).to.equal(6);
    });
});