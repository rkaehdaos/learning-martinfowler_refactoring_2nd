import {expect} from "chai";
import {Party, Employee, Department} from "./12-3_PullUpConstructorBody.js";

describe('12-3 생성자 본문 올리기', () => {
    it('employee', () => {
        const employee = new Employee("Ahn", "1", 10);
        expect(employee).to.instanceof(Party);
        expect(employee.monthlyCost).to.equal(10);
    });
    it('department', () => {
        const department = new Department("Ahn", "A");
        expect(department).to.instanceof(Party);
        expect(department.staff).to.equal("A");
    });
});
