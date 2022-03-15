import {expect} from "chai";
import {ProductionPlan} from "./9-3_replaceDerivedVariableWithQuery.js";

describe('9-3 파생변수를 질의함수로 바꾸기 - 기본 빈 함수', () => {
    it('production 기본값은 100', () => {
        // given
        const emptyProductionPlan = new ProductionPlan();
        // then
        expect(emptyProductionPlan)
            .to.have.property('production')
            .that.equals(100);
    });

    it('조정값의 amount필드가 production에 합산되어 반영된다', () => {
        // given
        const emptyProductionPlan = new ProductionPlan();
        expect(emptyProductionPlan)
            .to.have.property('production')
            .that.equals(100);

        // when
        emptyProductionPlan.applyAdjustment({name:"조정값1",amount:150});

        // then
        expect(emptyProductionPlan)
            .to.have.property('production')
            .that.equals(250);
    });
});