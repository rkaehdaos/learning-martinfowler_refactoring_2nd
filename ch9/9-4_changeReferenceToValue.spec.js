import {expect} from "chai";
import {Person, TelephoneNumber} from "./9-4_changeReferenceToValue.js";

describe('9-4 참조를 값으로 바꾸기', () => {
    it('생성 시점에 전화번호가 올바로 설정되어있지 못하다 ', function () {
        const aPerson = new Person();
        expect(aPerson.officeAreaCode).to.equals(undefined);
        expect(aPerson.officeNumber).to.equals(undefined);
    });
    it('바뀐 생성자 테스트 ', () => {
        const aPerson = new Person('070','12341234');
        expect(aPerson.officeAreaCode).to.equals('070');
        expect(aPerson.officeNumber).to.equals('12341234');
    });
    it('equals 동치성 비교 메소드 테스트, 실패 예상 ', () => {
        const aPerson = new Person('070','12341234');

        // mocha의 deep 기능
        expect(aPerson).to.deep.equals(new Person('070','12341234'));

        // 실패
        expect(aPerson).to.equals(new Person('070','12341234'));

    });
});