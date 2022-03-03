import {expect} from "chai";
import {getRawDataOfOrganization, organization} from "./7-1_encapsulateRecord.js";

describe("7-1 레코드 캡슐화", () => {
    it("기본", () => {
        const result = organization;
        expect(result).to.have.property('name').that.is.equal('애크미 구스베리');
        expect(result).to.have.property('country').that.is.equal('GB');
    });
    it("변수 캡슐화 테스트", () => {
        expect(getRawDataOfOrganization()).to.have.property('name').that.is.equal('애크미 구스베리');
        expect(getRawDataOfOrganization()).to.have.property('country').that.is.equal('GB');
        expect(getRawDataOfOrganization().name).to.equal('애크미 구스베리');
        expect(getRawDataOfOrganization().country).to.equal('GB');
    });
});