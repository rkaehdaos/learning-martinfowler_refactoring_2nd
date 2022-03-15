import {expect} from "chai";
import {ProductionPlan} from "./9-3_replaceDerivedVariableWithQuery.js";

describe('9-3 파생변수를 질의함수로 바꾸기 - 기본 빈 함수', () => {
    it('applyAdjustment로 조정값 추가 가능', () => {
        // given
        const prodPlan = new ProductionPlan(0);

        // when
        prodPlan.applyAdjustment({name: '조정1', amount: 1000});

        // then
        expect(prodPlan.production).equals(1000);
    });
});