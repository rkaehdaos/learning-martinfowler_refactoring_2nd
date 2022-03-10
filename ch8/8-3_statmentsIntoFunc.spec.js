import {expect} from "chai";
import {renderPerson,photoDiv} from "./8-3_statmentsIntoFunc.js";
const aPerson = {
    name: "Ahn",
    photo: {
        title: "withDaughter",
        location: "Seoul",
        date: new Date()
    }
};
describe('8-3 문장 함수로 옮기기', () => {

    it('render a photoDiv', () => {
        const expected = '<div>\n<p>title: withDaughter</p>\n<p>location: Seoul</p>\n<p>date: ' +
            new Date().toDateString() + '</p>\n</div>';
        expect(photoDiv(aPerson.photo)).to.equal(expected);
    });
    it('renderPerson은 daysOverdrawn가 0일때 4.5 bankCharge 반환', () => {
        const expected = '<p>Ahn</p>\n\n<p>title: withDaughter</p>\n<p>location: Seoul</p>\n<p>date: ' +
            new Date().toDateString() + '</p>';
        expect(renderPerson(aPerson)).to.equal(expected);
    });
});

