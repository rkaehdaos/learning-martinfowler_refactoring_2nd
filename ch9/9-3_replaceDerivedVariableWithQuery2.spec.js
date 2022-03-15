import {expect} from "chai";
import {ProductionPlan} from "./9-3_replaceDerivedVariableWithQuery2.js";

describe('9-3 파생변수를 질의함수로 바꾸기 - 기본 빈 함수', () => {
    it('초기값이 0이면 성공', () => {
        // given
        const defaultZeroProdPlan = new ProductionPlan(0);

        // when
        defaultZeroProdPlan.applyAdjustment({name: '조정1', amount: 1000});

        // then
        expect(defaultZeroProdPlan.production).equals(1000);
    });
});