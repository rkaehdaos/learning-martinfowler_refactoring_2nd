class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() {
        return this._name;
    }

    get type() {
        return Employee.legalTypeCodes[this._typeCode];
    }

    static get legalTypeCodes() {
        return {"E": "Engineer", "M": "Manager", "S": "Salesman"};
    }
}

function createEngineer(name) {
    return new Employee(name, 'E');
}

function createManager(name) {
    return new Employee(name, 'M');
}

function createSalesman(name) {
    return new Employee(name, 'S');
}

export {Employee, createEngineer, createManager, createSalesman};