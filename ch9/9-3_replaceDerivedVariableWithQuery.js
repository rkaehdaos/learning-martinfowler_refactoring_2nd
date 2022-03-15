class ProductionPlan {
    constructor() {
        this._adjustments = ['dafault'];
        this._production = 100;
    }

    get production() {
        return this._production;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment)
        this._production += anAdjustment.amount
    }
}

export {ProductionPlan};