class EmployeeType {
    constructor(aString) {this._value = aString;}

}

class Engineer extends EmployeeType {
    toString() {return "engineer";}
}
class Manager extends EmployeeType {
    toString() {return "manager";}
}
class Salesman extends EmployeeType {
    toString() {return "salesman";}
}

export class Employee {

    constructor(name, type) {
        this._name = name;
        this.type = type;
    }

    get typeString(){return this._type.toString();}
    get type()      {return this._type;}
    set type(arg)   {this._type= Employee.createEmployeeType(arg);}

    static createEmployeeType(aString) {
        switch (aString) {
            case "engineer":
                return new Engineer(aString);
            case "manager":
                return new Manager(aString);
            case "salesman":
                return new Salesman(aString);
            default:
                throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }

    get capitalizedType() {
        return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedType})`;
    }
}

// 이미 서브클래스 존재
// 직접 상속 방식으로는 타입문제를 대처할 수 없다
class Arbeit extends Employee {}
class Fulltime extends Employee {}
