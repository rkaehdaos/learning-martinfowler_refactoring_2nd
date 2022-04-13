import {expect} from "chai";
import {Employee} from "./12-6_ReplaceTypeCodeWithSubclasses2.js";


describe('12-6 타입코드를 서브클래스로 -  간접상속', () => {
    it('create engineer', () => {
        const engineer = new Employee("Tom", "engineer");

        expect(engineer.toString()).to.equal("Tom (Engineer)");
    });

    it('create manager', () => {
        const engineer = new Employee("Sarah", "manager");

        expect(engineer.toString()).to.equal("Sarah (Manager)");
    });

    it('create salesman', () => {
        const engineer = new Employee("David", "salesman");

        expect(engineer.toString()).to.equal("David (Salesman)");
    });

    it('그외의 타입코드는 에러 ', () => {
        expect(function(){ new Employee("Ahn", "developer")}).to.throw("developer라는 직원 유형은 없습니다.");
    });

});
