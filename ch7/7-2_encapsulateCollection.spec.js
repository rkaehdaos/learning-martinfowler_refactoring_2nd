import {expect} from "chai";
import {Person, Course} from "./7-2_encapsulateCollection.js";

describe('7-2컬렉션캡슐화', () => {
    it('기본테스트', () => {
        const aPerson = new Person('Ahn');
        const numCourses = aPerson.courses.length;
        expect(numCourses).equals(0);
    });
    it('클라이언트테스트1', () => {
        //given
        const aPerson = new Person('Ahn');
        const aCoursesNames = ["korean", "math", "english", "social", "science"];

        //when
        aPerson.courses = aCoursesNames.map(name => new Course(name, false));
        console.log(aPerson.courses);

        const numCourses = aPerson.courses.length;
        expect(numCourses).equals(5);
    });
    it('클라이언트테스트2', () => {
        //given
        const aPerson = new Person('Ahn');
        const aCoursesNames = ["korean", "math", "english", "social", "science"];

        //when
        for(const name of aCoursesNames)
            aPerson.courses.push(new Course(name,false));

        console.log(aPerson.courses);

        const numCourses = aPerson.courses.length;
        expect(numCourses).equals(5);
    });

})