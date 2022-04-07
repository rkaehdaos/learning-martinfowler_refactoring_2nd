import {expect} from "chai";
import {charge} from "./11-10_ReplaceCommandWithFunction.js";

describe('11-10 명령객체를 함수로 ', () => {
    const customer = {baseRate: 0.1};
    const provider = {connectionCharge: 1000};

    it('전체 charge 계산', () => {
        const monthCharge = charge(customer, 100, provider);
        expect(monthCharge).to.equal(1010);
    });

});
