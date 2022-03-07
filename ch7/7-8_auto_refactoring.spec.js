import {expect} from "chai";
import {Person, Department} from "./7-8_auto_refactoring.js";

describe('7-8 자동 리팩터링', () => {
    it('default', () => {
        //given
        const aDepartment = new Department();
        aDepartment.chargeCode ='000111';
        aDepartment.manager = 'David';

        const aPerson = new Person('Ahn');
        aPerson.department = aDepartment;

        //when
        const managerResult = aPerson.manager; //위임메서드를 사용중

        //then
        expect(managerResult).equals('David');

    });
});