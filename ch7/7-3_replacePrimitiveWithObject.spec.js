import {expect} from "chai";
import {Order} from "./7-3_replacePrimitiveWithObject.js";
describe('7-3기본형객체형바꾸기',() => {
    it('test1', () => {
        //given
        let orders = [];
        let orderList = ["high", "high", "rush", "row", "row"];

        //when
        orderList.map((value, index) => orders.push(new Order({"priority": value, "orderNum":index})));
        //then
        expect(orders).to.length(5);

        //when
        const highPriorityCount = orders.filter(o => "high" === o.priority || "rush"===o.priority ).length;
        //then
        expect(highPriorityCount).equals(3);
    });
})