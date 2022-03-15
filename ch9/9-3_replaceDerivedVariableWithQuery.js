import {assert} from "chai";

class ProductionPlan {
    constructor() {
        this._production = 0;
        this._adjustments = [];
    }

    get production() {

        return this.calcalatedProduction;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }

    get calcalatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }

}

export {ProductionPlan};