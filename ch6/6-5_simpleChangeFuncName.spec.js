import {expect} from "chai";
import {circumference, mig_circum} from "./6-5_simpleChangeFuncName.js";

describe("함수 선언 바꾸기", () => {
    it('함수 이름 바꾸기', () => {
        expect(circumference(1)).equal(2 * Math.PI);
        expect(circumference(50)).equal(100 * Math.PI);
    });
    it('이름 바꾸기 (마이그레이션', () => {
        expect(mig_circum(1)).equal(2 * Math.PI);
        expect(mig_circum(50)).equal(100 * Math.PI);
    });

})