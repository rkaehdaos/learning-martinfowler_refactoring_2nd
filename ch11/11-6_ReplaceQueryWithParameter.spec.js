import {expect} from "chai";
import {HeatingPlan,temperatureAlerts} from "./11-6_ReplaceQueryWithParameter.js";
import sinon from "sinon/pkg/sinon-esm.js";

describe('11-6. ', () => {
    it('24선택에 현재 28도, 20-25 계획이라면 냉각모드', () => {
        const alarm = { doit: function (msg) {} };
        const mock = sinon.mock(alarm);
        mock.expects("doit").once().withArgs("냉각모드");
        temperatureAlerts(new HeatingPlan(20, 25), alarm);
        mock.verify();
    });
    it('24선택에 현재 28도, 30-35 계획이라면 온열모드', () => {
        const alarm = { doit: function (msg) {} };
        const mock = sinon.mock(alarm);
        mock.expects("doit").once().withArgs("온열모드");
        temperatureAlerts(new HeatingPlan(30, 35), alarm);
        mock.verify();
    });

});