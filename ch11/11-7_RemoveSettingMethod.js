class Person {
    constructor() {
    }
    get name() {return this._name;}
    set name(arg) {this._name=arg;}
    get id() {return this._id;}
    set id(arg) {this._id=arg;}
}

function makeMartin() {
    let martin = new Person();
    martin.name = "마틴";
    martin.id = "1234";
    return martin;
}

export {Person, makeMartin};