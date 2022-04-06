import {expect} from 'chai';
import {Order} from "./11-5_ReplaceParameterWithQuery.js";

describe('11-5 매개변수를 질의함수로 바꾸기: Order', () => {
    it('100이하 수량의 finalPrice', () => {
        const order = new Order(100, 10);

        expect(order.finalPrice).to.equal(950);
    });

    it('100초과 수량의 finalPrice', () => {
        const order = new Order(101, 10);
        expect(order.finalPrice).to.equal(909);
    });
});
