import {expect} from "chai";
import {ChargeCalculator} from "./11-10_ReplaceCommandWithFunction.js";

describe('11-10 명령객체를 함수로 ', () => {
    const customer = {baseRate: 0.1};
    const provider = {connectionCharge: 1000};

    it('baseCharge 계산', () => {
        const chargeCalculator = new ChargeCalculator(customer, 100, provider);

        expect(chargeCalculator.baseCharge).to.equal(10);
    });

    it('전체 charge 계산', () => {
        const chargeCalculator = new ChargeCalculator(customer, 100, provider);

        expect(chargeCalculator.charge).to.equal(1010);
    });

});
