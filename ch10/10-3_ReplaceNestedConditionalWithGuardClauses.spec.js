import {expect} from "chai";
import {payAmount} from "./10-3_ReplaceNestedConditionalWithGuardClauses.js";

describe('10-3_ReplaceNestedConditionalWithGuardClauses', () => {
    it('퇴사직원은 SEP 코드와 0의 급여', () => {
        const resultSeparated = payAmount({name:'ahn',isSeparated:true});
        expect(resultSeparated.resonCode).to.equal('SEP');
        expect(resultSeparated.amount).to.equal(0);
    });
    it('은퇴직원은 RET 코드와 0의 급여', () => {
        const resultRetired = payAmount({name:'ahn',isRetired:true});
        expect(resultRetired.resonCode).to.equal('RET');
        expect(resultRetired.amount).to.equal(0);
    });
    it('다른 조건이라면 급여계산 OK', () => {
        const resultNotSeparated = payAmount({name:'ahn',isSeparated:false});
        expect(resultNotSeparated.resonCode).to.equal('OK');
        expect(resultNotSeparated.amount).to.equal(1000);

        const resultNotRetired = payAmount({name:'ahn',isRetired:false});
        expect(resultNotRetired.resonCode).to.equal('OK');
        expect(resultNotRetired.amount).to.equal(1000);
    });

});