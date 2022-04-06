import {expect} from "chai";
import {Person, makeMartin} from "./11-7_RemoveSettingMethod.js";

describe('11-7 세터제거하기', () => {
    it('마틴', () => {
        const martin = makeMartin();
        expect(martin.id).to.eql("1234");
        expect(martin.name).to.eql("마틴");
    });
});