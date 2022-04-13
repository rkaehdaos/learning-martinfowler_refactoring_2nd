class EmployeeType {
    get capitalizedName() {
        return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
    }
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
                return new Engineer();
            case "manager":
                return new Manager();
            case "salesman":
                return new Salesman();
            default:
                throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }

    toString() {
        return `${this._name} (${this.type.capitalizedName})`;
    }
}

// 이미 서브클래스 존재
// 직접 상속 방식으로는 타입문제를 대처할 수 없다
class Arbeit extends Employee {}
class Fulltime extends Employee {}
