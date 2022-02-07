const {sampleProvinceData,Province,Producer} = require("./test4-1.js");

describe('province', () => {
    test('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).toEqual(5);
    });
});

