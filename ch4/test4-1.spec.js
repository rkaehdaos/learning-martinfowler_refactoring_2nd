// import * as chai from "chai";
import {assert, expect} from "chai";
import {sampleProvinceData, Province, Producer} from './test4-1.js'

describe('province', () => {
    let asia;
    beforeEach(() => {asia = new Province(sampleProvinceData());})
    it('shortfall', () => expect(asia.shortfall).equal(5));
    it('profit', () => expect(asia.profit).equal(230));
});

