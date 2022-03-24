import {expect} from "chai";
import {customerName, Customer, Site} from "./10-5_IntroduceSpecialCase.js";

describe('10-5특이케이스 - 클라이언트1 customerName ', () => {
    it('미확인 고객은 거주자라고 나온다 ', () => {
        expect(customerName(new Site("미확인 고객"))).to.equal("거주자");
    });
    it('미확인 고객이 아닌 경우 이름이 나온다 ', () => {
        expect(customerName(new Site(new Customer("Ahn")))).to.equal("Ahn");
    });
});