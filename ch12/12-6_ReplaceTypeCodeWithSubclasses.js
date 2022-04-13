export class Employee {

    constructor(name, type) {
        this.validateType(type);
        this._name = name;

    }

    validateType(arg) {
        if (!["engineer", "manager", "salesman"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

class Engineer extends Employee {
    get type() {return "engineer";}
}

class Salesman extends Employee {
    get type() {return "salesman";}
}

class Manager extends Employee {
    get type() {return "manager";}
}

export function createEmployee(name, type) {
    switch (type) {
        case "engineer":
            return new Engineer(name, type);
        case "salesman":
            return new Salesman(name, type);
        case "manager":
            return new Manager(name, type);
    }
    return new Employee(name, type);
}