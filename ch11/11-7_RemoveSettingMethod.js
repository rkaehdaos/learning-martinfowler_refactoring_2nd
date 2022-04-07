class Person {
    constructor(id) {
        this._id=id;
    }
    get name() {return this._name;}
    set name(arg) {this._name=arg;}
    get id() {return this._id;}
}

function makeMartin() {
    let martin = new Person("1234");
    martin.name = "마틴";
    return martin;
}

export {Person, makeMartin};