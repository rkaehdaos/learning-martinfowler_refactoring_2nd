import {expect} from "chai";
import {Order} from "./7-4_replaceTempWithQuery.js";
describe('7-4임시변수 질의함수로 바꾸기', () => {
    it('전체 가격이 1000이하면 2%할인', () => {
        const aOrder = new Order(5, {"price": 100});
        expect(aOrder.price).equals(490);
    });
    it('전체 가격이 1000초과면 면 5%할인', () => {
        const aOrder = new Order(100, {"price": 100});
        expect(aOrder.price).equals(9500);
    });
});