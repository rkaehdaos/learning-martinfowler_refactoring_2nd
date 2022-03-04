class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }
    get name() { return this._name; }
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}

class Course {
    constructor(name, isAdvance) {
        this._name = name;
        this._isAdvance = isAdvance;
    }
    get name() { return this._name; }
    get isAdvance() { return this._isAdvance; }
}

export {Person, Course};