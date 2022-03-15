class ProductionPlan {
    constructor(production) {
        this._production = production;
        this._adjustments = [];
    }

    get production() {return this._production;}

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    //앞과 같은 calc
    get calcaulatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }


}

export {ProductionPlan};