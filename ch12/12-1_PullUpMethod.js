export class Party {
    constructor() {
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

export class Employee extends Party {
    constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
    }

}

export class Department extends Party {
    constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

