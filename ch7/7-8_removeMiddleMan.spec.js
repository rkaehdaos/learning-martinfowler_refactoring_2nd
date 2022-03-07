import {expect} from "chai";
import {Person, Department} from "./7-8_removeMiddleMan.js";

describe('7-8위임 숨기기', () => {
    it('default', () => {
        //given
        const aDepartment = new Department();
        aDepartment.chargeCode ='000111';
        aDepartment.manager = 'David';

        const aPerson = new Person('Ahn');
        aPerson.department = aDepartment;

        //when
        const managerResult = aPerson.department.manager

        //then
        expect(managerResult).equals('David');

    });
});