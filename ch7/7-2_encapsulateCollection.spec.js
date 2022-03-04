import {expect} from "chai";
import {Person,Course} from "./7-2_encapsulateCollection.js";
describe('7-2컬렉션캡슐화',() => {
    it('기본테스트', () => {
        const aPerson = new Person('Ahn');
        const numCourses = aPerson.courses.length;
        expect(numCourses).equals(0);
    });
} )