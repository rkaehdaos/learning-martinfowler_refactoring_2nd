import * as chai from "chai";
import {sampleProvinceData, Province, Producer} from './test4-1.js'

describe('province', () => {
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        chai.assert.equal(asia.shortfall, 5);
    });
});

