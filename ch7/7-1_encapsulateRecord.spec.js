import {expect} from "chai";
import {organization} from "./7-1_encapsulateRecord.js";

describe("6-1 레코드 캡슐화", () => {
    it("test1", () => {
        const result = organization;
        console.log(result);
        expect(result).to.have.property('name').that.is.equal('애크미 구스베리');
        expect(result).to.have.property('country').that.is.equal('GB');
    })
});