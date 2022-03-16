class Person {
    constructor(areaCode, number) {
        this._telephoneNumber= new TelephoneNumber(areaCode, number);
    }
    get officeAreaCode() {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) {this._telephoneNumber= new TelephoneNumber(arg, this.officeNumber);}
    get officeNumber() {return this._telephoneNumber.number;}
    set officeNumber(arg) {this._telephoneNumber= new TelephoneNumber(this.officeAreaCode, arg);}
}

class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode() {return this._areaCode;}
    get number() {return this._number;}
}

export {Person, TelephoneNumber};