class ProductionPlan {
    constructor() {
        this._adjustments = [{name: '기본값1', amount: 70}, {name: '기본값1', amount: 30}];
    }

    get production() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment)
    }
}

export {ProductionPlan};