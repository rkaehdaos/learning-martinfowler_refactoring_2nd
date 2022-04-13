export class Employee {

    constructor(name) {
        this._name = name;
    }

}

class Engineer extends Employee {
    get type() {return "engineer";}
    toString() {return `${this._name} (engineer)`;}
}

class Salesman extends Employee {
    get type() {return "salesman";}
    toString() {return `${this._name} (salesman)`;}
}

class Manager extends Employee {
    get type() {return "manager";}
    toString() {return `${this._name} (manager)`;}
}

export function createEmployee(name, type) {
    switch (type) {
        case "engineer":
            return new Engineer(name);
        case "salesman":
            return new Salesman(name);
        case "manager":
            return new Manager(name);
        default:
            throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }

}