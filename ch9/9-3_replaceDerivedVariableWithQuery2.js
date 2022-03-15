class ProductionPlan {
    constructor(production) {
        this._initialProduction = production;
        this._productionAccumulator = 0;
        this._adjustments = [];
    }

    get production() {return this._initialProduction+this._productionAccumulator;}

    // 책에는 안나왔지만
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._productionAccumulator += anAdjustment.amount;
    }

    get calculatedProductionAccumulator() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }
}


export {ProductionPlan};