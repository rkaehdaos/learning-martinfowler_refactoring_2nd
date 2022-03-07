class Person {
    constructor() {
        this._name = '';
        this._officeAreaCode = '';
        this._officeNumber = '';
    }

    get name() {return this._name;}
    set name(arg) {this._name=arg;}
    get telephoneNumber() {return `(${this.officeAreaCode}) ${this.officeNumber}`;}
    get officeAreaCode() {return this._officeAreaCode;}
    set officeAreaCode(arg) {this._officeAreaCode=arg;}
    get officeNumber() {return this._officeNumber}
    set officeNumber(arg) {this._officeNumber=arg;}
}

export {Person};