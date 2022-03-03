import {expect} from "chai";
import {getRawDataOfOrganization,getOrganization} from "./7-1_encapsulateRecord.js";

describe("7-1 레코드 캡슐화", () => {
    it("변수 캡슐화 테스트", () => {
        expect(getOrganization().name).to.equal('애크미 구스베리');
        expect(getRawDataOfOrganization().country).to.equal('GB');

        getOrganization().name = 'new name';
        expect(getOrganization().name).to.equal('new name');

        getOrganization().country = 'KR';
        expect(getRawDataOfOrganization().country).to.equal('KR');

    });
});