import {expect} from "chai";
import {Order,Priority} from "./7-3_replacePrimitiveWithObject.js";
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
        const highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush"===o.priorityString ).length;
        //then
        expect(highPriorityCount).equals(3);
    });
    it('바뀐 settter 테스트', () => {
        //given
        let orders = [];
        let orderList = ["high", "high", "rush", "row", "row"];

        //when
        orderList.map((value, index) => orders.push(new Order({"priority": new Priority(value), "orderNum":index})));
        //then
        expect(orders).to.length(5);

        //when
        const highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush"===o.priorityString ).length;
        //then
        expect(highPriorityCount).equals(3);
    });
})