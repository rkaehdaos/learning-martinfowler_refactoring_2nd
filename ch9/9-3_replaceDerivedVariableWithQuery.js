import {assert} from "chai";

class ProductionPlan {
    constructor() {
        this._adjustments = [{name: '기본값1', amount: 70}, {name: '기본값1', amount: 30}];
        this._production = 100;
    }

    get production() {
        return this._production;
    }

    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment)
        this._production += anAdjustment.amount
    }

    get calculatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
}

export {ProductionPlan};