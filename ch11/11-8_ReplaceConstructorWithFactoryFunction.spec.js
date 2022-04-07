import {expect} from "chai";
import {createEngineer, createManager, createSalesman} from "./11-8_ReplaceConstructorWithFactoryFunction.js";

describe('11-8 생성자를 팩터리로 바꾸기 : Employee', () => {
    it('주어진 이름의 매니저 생성 ', () => {
        const candidate = createManager("Ahn");

        expect(candidate.name ).to.equal("Ahn");
        expect(candidate.type ).to.equal("Manager");
    });

    it('주어진 이름의 엔지니어 생성 ', () => {
        const candidate = createEngineer("Ahn");

        expect(candidate.name ).to.equal("Ahn");
        expect(candidate.type ).to.equal("Engineer");
    });
    it('주어진 이름의 세일즈맨 생성 ', () => {
        const candidate = createSalesman("Ahn");

        expect(candidate.name ).to.equal("Ahn");
        expect(candidate.type ).to.equal("Salesman");
    });
});
