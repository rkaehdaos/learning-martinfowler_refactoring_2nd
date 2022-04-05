import {expect} from "chai";
import {baseCharge} from "./11-2_ParameterizeFunction.js";

describe('11-2 baseCharge', () => {
    it('usage가 0보다 작아도 0', () =>
        expect(baseCharge(-1)).to.eql({currency: "$", currencyName: "USD", value: 0}));
    it('usage가 0이면 결과도 0', () =>
        expect(baseCharge(0)).to.eql({currency: "$", currencyName: "USD", value: 0}));
    it('10이면 bottomBand만 적용되서 0.3 ', () =>
        expect(baseCharge(10)).to.eql({currency: "$", currencyName: "USD", value: 0.3}));
    it('100도 bottomBand만 적용되서 3 ', () =>
        expect(baseCharge(100)).to.eql({currency: "$", currencyName: "USD", value: 3}));
    it('101부턴 middleband도 적용되서 3.05 ', () =>
        expect(baseCharge(101)).to.eql({currency: "$", currencyName: "USD", value: 3.05}));
    it('200도 middleband도 적용되서 3+5 ', () =>
        expect(baseCharge(200)).to.eql({currency: "$", currencyName: "USD", value: 3+5}));
    it('201부턴 highband 적용 : 8.07 ', () =>
        expect(baseCharge(201)).to.eql({currency: "$", currencyName: "USD", value: 3+5+0.07}));
});
