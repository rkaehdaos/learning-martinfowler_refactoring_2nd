export class Party {
    constructor() {
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }

    // 함정 메서드
    get monthlyCost() {
        throw new Error("서브클래스가 책임질 부분!");
    }

}

export class Employee extends Party {
    constructor(monthlyCost) {
        super();
        this._monthlyCost = monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }

}

export class Department extends Party {
    constructor(monthlyCost) {
        super();
        this._monthlyCost = monthlyCost;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }

}

