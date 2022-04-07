import {expect} from "chai";
import {Employee,createEmployee} from "./11-8_ReplaceConstructorWithFactoryFunction.js";

describe('11-8 생성자를 팩터리로 바꾸기 : Employee', () => {
    it('주어진 이름의 Manager 생성 ', () => {
        const candidate = createEmployee("Ahn", "M");

        expect(candidate.name ).to.equal("Ahn");
        expect(candidate.type ).to.equal("Manager");
    });

    it('주어진 이름의 엔지니어 생성 ', () => {
        const candidate = createEmployee("Ahn", "E");

        expect(candidate.name ).to.equal("Ahn");
        expect(candidate.type ).to.equal("Engineer");
    });
});
