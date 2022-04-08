class Party {
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._name = name;
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get id() {return this._id;}
    get name() {return this._name;}
    get monthlyCost() {return this._monthlyCost;}
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        this._name = name;
        this._staff = staff;
    }
    get staff() {return this._staff;}
}

export {Party, Employee, Department};