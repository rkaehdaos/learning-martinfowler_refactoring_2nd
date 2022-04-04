import {expect} from "chai";
import {customerName, Customer, Site, billingPlan, changeBillingPlan,weeksDelinquent} from "./10-5_IntroduceSpecialCase.js";

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
        expect(billingPlan(new Site("미확인 고객"))).to.equal("basic");
    });
    it('미확인이 아니라면 원래 설정된 플랜 값을 가진다 ', () => {
        expect(billingPlan(new Site(new Customer("Ahn", "Annual")))).to.equal("Annual");
    });
});
describe('10-5특이케이스 - 클라이언트3 newPlan', () => {
    it('미확인 고객은 그냥 그대로 ', () => {
        expect(changeBillingPlan("미확인 고객")).to.equal("미확인 고객");
    });
    it('미확인 고객이 아니라면 고객 플랜값을 주어진 기본 요금제으로 변경 ', () => {
        expect(changeBillingPlan(new Customer("Ahn", "Annual"), "basic").billingPlan).to.equal("basic");
    });
});

describe('10-5특이케이스 - 클라이언트4 연체', () => {
    it('미확인 고객 연체기간은 0', () => {
        expect(weeksDelinquent("미확인 고객")).to.equal(0);
    });
    it('미확인 고객이 아니면 정의된 연체기간 리턴', () => {
        expect(weeksDelinquent(new Customer("Ahn", "Annual", {weeksDelinquentInLastYear: 2}))).to.equal(2);
    });
});
