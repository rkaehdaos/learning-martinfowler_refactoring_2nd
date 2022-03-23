import {expect} from "chai";
import {disabilityAmount} from "./10-2_ConsolidateConditionalExpression.js";

describe('10-2 조건식 통합하기', () => {
    it('연공서열이 2년이 안된 경우 0', () => {
        expect(disabilityAmount({name: 'ahn', seniority: 0})).to.equals(0);
        expect(disabilityAmount({name: 'ahn', seniority: 1})).to.equals(0);
        expect(disabilityAmount({name: 'ahn', seniority: 2})).not.to.equals(0);
    });
    it('장애가 된지 12달 초과시 안나옴', () => {
        expect(disabilityAmount({name: 'ahn', monthDisabled: 0})).not.to.equals(0);
        expect(disabilityAmount({name: 'ahn', monthDisabled: 6})).not.to.equals(0);
        expect(disabilityAmount({name: 'ahn', monthDisabled: 12})).not.to.equals(0);
        expect(disabilityAmount({name: 'ahn', monthDisabled: 13})).to.equals(0);
    });
    it('파트타임인경우 해당 사항 없음', () => {
        expect(disabilityAmount({name: 'ahn', isPartTime: true})).to.equals(0);
        expect(disabilityAmount({name: 'ahn', isPartTime: false})).not.to.equals(0);
    });
});