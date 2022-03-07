import {expect} from "chai";
import {Person, Department} from "./7-7_hideDelegate.js";

describe('7-7위임 숨기기', () => {
    it('클라이언트는 부서가 관리자 정보를 제공한다는 사실을 알아야 한다', () => {
        //given
        const aDepartment = new Department();
        aDepartment.chargeCode ='000111';
        aDepartment.manager = 'David';

        const aPerson = new Person('Ahn');
        aPerson.department = aDepartment;

        //when
        const managerResult = aPerson.manager;

        //then
        expect(managerResult).equals('David');

    });
});