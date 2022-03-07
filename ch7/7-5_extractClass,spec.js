import {expect} from "chai";
import {Person} from "./7-5_extractClass.js";

describe('7-5클래스 추축하기', () => {
    it('default', () => {
        let aPerson = new Person();
        aPerson.name = 'ahn';
        aPerson.areaCode = '070';
        aPerson.number = '1234-5678';
        expect(aPerson.telephoneNumber).equals('(070) 1234-5678');
    });
})