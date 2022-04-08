export class Party {
    constructor() {
    }
}

export class Employee extends Party {
    constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

export class Department extends Party {
    constructor(monthlyCost) {
        super();
        this.monthlyCost = monthlyCost;
    }

    get totalAnnualCost() {
        return this.monthlyCost * 12;
    }
}

