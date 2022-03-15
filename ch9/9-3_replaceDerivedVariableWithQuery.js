import {assert} from "chai";

class ProductionPlan {
    constructor() {
        this._production = 0;
        this._adjustments = [];
    }

    get production() {
        // assert(this._production === this.calcaulatedProduction);
        return this._production;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    get calcaulatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }

}

export {ProductionPlan};