import {expect} from "chai";
import {Person, TelephoneNumber} from "./9-4_changeReferenceToValue.js";

describe('9-4 참조를 값으로 바꾸기', () => {
    it('생성 시점에 전화번호가 올바로 설정되어있지 못하다 ', function () {
        const aPerson = new Person();
        expect(aPerson.officeAreaCode).to.equals(undefined);
        expect(aPerson.officeNumber).to.equals(undefined);
    });
});