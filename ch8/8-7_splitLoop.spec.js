import {expect} from 'chai';
import {reportYoungestAgeAndTotalSalary} from "./8-7_splitLoop.js";

const people = [
    {age: "30", salary: 2000},
    {age: "25", salary: 2000},
    {age: "31", salary: 2000}];

describe('8-7 반복문 쪼개기', () => {
    it('가장 어린 나이, 총 급여 계산', () => {
        expect(reportYoungestAgeAndTotalSalary(people)).to.equal("최연소: 25, 총 급여: 6000");
    });
});
