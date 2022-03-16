import {expect} from "chai";
import {Order} from "./9-5_changeValueToRef.js";

describe('9-5 값을 참조로 바꾸기', () => {
    it('should ', () => {
        // given
        let order1 = new Order({orderId: 1, customer: "123", number: "100"});
        let order2 = new Order({orderId: 2, customer: "123", number: "100"});
        let order3 = new Order({orderId: 3, customer: "123", number: "100"});

        // when
        order2 = new Order({orderId: 4, customer: "777", number: "100"});

        // then
        expect(order1.customer.id).to.equals("123");
        expect(order3.customer.id).to.equals("123");
    });
});