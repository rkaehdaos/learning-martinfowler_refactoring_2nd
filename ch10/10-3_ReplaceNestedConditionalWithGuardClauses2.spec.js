import {expect} from "chai";
import {adjustedCapital} from "./10-3_ReplaceNestedConditionalWithGuardClauses2.js";

describe('10-3_ReplaceNestedConditionalWithGuardClauses2(조건 반대로 만들기)', () => {
    it('자본이 0보다 크지 않으면 조정자본도 0', () => {
        expect(adjustedCapital({capital: -1})).to.equal(0);
        expect(adjustedCapital({capital: 0})).to.equal(0);
    });
    it('자본이 0보다 커도 이자율(interestRate), 기간(duration)이 0보다 크지 않으면 0', () => {
        expect(adjustedCapital({capital: 10000, interestRate: 0})).to.equal(0);
        expect(adjustedCapital({capital: 10000, interestRate: -1})).to.equal(0);
        expect(adjustedCapital({capital: 10000, duration:0})).to.equal(0);
        expect(adjustedCapital({capital: 10000, duration:-1})).to.equal(0);
    });
    it('0인조건이 아니면 계산', () => {
        expect(adjustedCapital({capital: 1, interestRate: 1, duration: 1, income: 1, adjustmentFactor: 1})).to.equal(1);
        expect(adjustedCapital({capital: 1, interestRate: 1, duration: 1, income: 2, adjustmentFactor: 2})).to.equal(4);
    });
});