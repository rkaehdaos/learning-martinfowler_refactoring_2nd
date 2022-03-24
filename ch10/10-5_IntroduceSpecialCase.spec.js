import {expect} from "chai";
import {customerName, Customer, Site,billingPlan} from "./10-5_IntroduceSpecialCase.js";

describe('10-5특이케이스 - 클라이언트1 customerName ', () => {
    it('미확인 고객은 거주자라고 나온다 ', () => {
        expect(customerName(new Site("미확인 고객"))).to.equal("거주자");
    });
    it('미확인 고객이 아닌 경우 이름이 나온다 ', () => {
        expect(customerName(new Site(new Customer("Ahn")))).to.equal("Ahn");
    });
});

describe('10-5특이케이스 - 클라이언트2 billingPlan', () => {
    it('미확인 고객은 basic 플랜', () => {
        expect(billingPlan("미확인 고객")).to.equal("basic");
    });
    it('미확인이 아니라면 원래 설정된 플랜 값을 가진다 ', () => {
        expect(billingPlan(new Customer("Ahn", "Annual"))).to.equal("Annual");
    });
});
