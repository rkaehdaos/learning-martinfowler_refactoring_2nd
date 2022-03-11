import {expect} from "chai";
import {discount} from "./9-1_splitVariable2.js";

describe('9-1 매개변수값 수정', () => {
    it('할인 없으면 넣은 값 그대로', () => expect(discount(10, 10)).to.eqls(10));
    it('inputValue 50초과시 -2', () => expect(discount(60, 10)).to.eqls(58));
    it('quantity 100초과시 -1', () => expect(discount(10, 110)).to.eqls(9));
    it('두 조건 모두 만족시 -3', () => expect(discount(60, 110)).to.eqls(57));
});