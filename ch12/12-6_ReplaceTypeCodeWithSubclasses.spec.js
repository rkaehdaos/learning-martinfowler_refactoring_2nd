import {expect} from 'chai';
import {Employee,createEmployee} from "./12-6_ReplaceTypeCodeWithSubclasses.js";


describe('12-6 타입코드를 서브클래스로', () => {
    it('create engineer', () => {
        const engineer = createEmployee("Tom", "engineer");

        expect(engineer.toString()).to.equal("Tom (engineer)");
    });

    it('create manager', () => {
        const engineer = createEmployee("Sarah", "manager");

        expect(engineer.toString()).to.equal("Sarah (manager)");
    });

    it('create salesman', () => {
        const engineer = createEmployee("David", "salesman");

        expect(engineer.toString()).to.equal("David (salesman)");
    });

    it('그외의 타입코드는 에러 ', () => {
        expect(function(){ createEmployee("Ahn", "developer")}).to.throw("developer라는 직원 유형은 없습니다.");
    });

});
