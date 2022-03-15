import {expect} from "chai";
import {ProductionPlan} from "./9-3_replaceDerivedVariableWithQuery.js";

describe('9-3 파생변수를 질의함수로 바꾸기 - 기본 빈 함수', () => {
    it('빈 함수는 undefiend production', () => expect(new ProductionPlan().production).equals(undefined));
    it('생성자로 값이 들어가면 기본 값 반영', () => expect(new ProductionPlan(777).production).equals(777));

    it('applyAdjustment로 조정값 추가 가능', () => {
        // given
        const prodPlan = new ProductionPlan(777);

        // when
        prodPlan.applyAdjustment({name: '조정1', amount: 1000});

        // then
        expect(prodPlan.production).equals(1777);
    });
});