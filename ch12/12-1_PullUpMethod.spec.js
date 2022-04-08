import {expect} from "chai";
import {Party, Employee, Department} from "./12-1_PullUpMethod.js";

describe('12-1 메서드 올리기', () => {
    it('Employee', () => {
        const employee = new Employee(10);
        expect(employee.annualCost).to.equal(120);
    });
    it('Department', () => {
        const department = new Department(20);
        expect(department.totalAnnualCost).to.equal(240);
    });
});