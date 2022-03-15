import {expect} from "chai";
import {organization} from "./9-2_renameField.js";

describe('9-2 필드 이름 바꾸기', () => {
    it('name과 country에 다음 값 포함 ', () => {
        expect(organization).to.have.property('title', '애크미 구스베리');
        expect(organization).to.have.property('country', 'GB');
    });

});