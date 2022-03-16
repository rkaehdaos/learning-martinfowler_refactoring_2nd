import {expect} from "chai";
import {Order} from "./9-5_changeValueToRef.js";

describe('9-5 값을 참조로 바꾸기', () => {
    it('should ', () => {
        // given
        let order1 = new Order({customer: "123", number: "100"});
        let order2 = new Order({customer: "123", number: "100"});
        let order3 = new Order({customer: "123", number: "100"});

        // when
        order2 = new Order({customer: "777", number: "100"});

        // then
        expect(order1.customer.id).to.equals("123");
    });
});