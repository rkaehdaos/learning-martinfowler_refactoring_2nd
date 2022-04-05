import {expect} from "chai";
import sinon from "sinon/pkg/sinon-esm.js";
import {alertForMiscreant,findMiscreant} from "./11-1_SeparateQueryFromModifier.js";

describe('악당 경고', () => {
    it('조커 찾고 경보 울리기', () => {
        const alarm = { setOff: function (msg) {} };

        const mock = sinon.mock(alarm);
        mock.expects("setOff").once().withArgs("악당 경고: 조커");

        expect(findMiscreant(["슈퍼맨", "배트맨", "조커"], alarm)).to.equal("조커");
        alertForMiscreant(["슈퍼맨", "배트맨", "조커"], alarm);
        mock.verify();
    });

    it('사루만 찾고 경보 울리기', () => {
        const alarm = { setOff: function (msg) {} };

        const mock = sinon.mock(alarm);
        mock.expects("setOff").once().withArgs("악당 경고: 사루만");

        expect(findMiscreant(["슈퍼맨", "배트맨", "사루만"], alarm)).to.equal("사루만");
        alertForMiscreant(["슈퍼맨", "배트맨", "사루만"], alarm);
        mock.verify();
    });
});