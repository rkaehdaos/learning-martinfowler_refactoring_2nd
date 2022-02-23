import {reportLines} from './6-2_inlineFunction.js'
import {expect} from "chai";

describe('함수인라인', () => {
    it('ex2', () => {
        let aCustomer = {
            "name": "GeunChang",
            "location": "seoul"
        };
        let result = reportLines(aCustomer);
        console.log(aCustomer);
        console.log(result);

        expect(result[0][0]).equal('name');
        expect(result[0][1]).equal('GeunChang');
        expect(result[1][0]).equal('location');
        expect(result[1][1]).equal('seoul');
    });
});