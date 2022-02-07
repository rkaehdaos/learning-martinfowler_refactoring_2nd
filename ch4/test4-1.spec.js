const {sampleProvinceData,Province,Producer} = require("./test4-1.js");

test('ch4', () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toEqual(5);
})