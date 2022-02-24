import {expect} from "chai";
import {circum} from "./6-5_simpleChangeFuncName.js";

describe("함수 선언 바꾸기", () => {
    it('함수 이름 바꾸기', () => {
        expect(circum(1)).equal(2 * Math.PI);
        expect(circum(50)).equal(100 * Math.PI);

    })
})