// import * as chai from "chai";
import {assert,expect} from "chai";
import {sampleProvinceData, Province, Producer} from './test4-1.js'

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equal(5);
    });
    it('profit', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    });

});

