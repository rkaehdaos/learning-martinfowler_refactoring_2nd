import {expect} from "chai";
import {customerData,getRawDataOfCustomers} from "./7-1_encapsulateNestedRecord.js";

describe("7-1중첩예제", () => {
    it("default", () => {
        expect(customerData).to.haveOwnProperty('1920').that.haveOwnProperty('name').that.equals('마틴 파울러');
        expect(customerData).to.haveOwnProperty('36873').that.haveOwnProperty('name').that.equals('닐 포드');
    });
    it("쓰기", () => {
        //given
        expect(getRawDataOfCustomers()).to.haveOwnProperty('1920')
            .that.haveOwnProperty('usages')
            .that.haveOwnProperty('2016')
            .that.haveOwnProperty('1')
            .that.equals(50);

        const customerID = 1920;
        const year = 2016;
        const month = 1;
        const amount = 999;

        //when
        getRawDataOfCustomers()[customerID].usages[year][month] = amount;

        //then
        expect(getRawDataOfCustomers()).to.haveOwnProperty('1920')
            .that.haveOwnProperty('usages')
            .that.haveOwnProperty('2016')
            .that.haveOwnProperty('1')
            .that.equals(999);
    });

    it("읽기", () => {
        function compareUsage(customerID, laterYear, month) {
            const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
            const earlier = getRawDataOfCustomers()[customerID].usages[laterYear-1][month];
            return {laterAmount: later, change: later - earlier};
        }
        console.log(compareUsage('1920', '2017', '3'));
        expect(compareUsage('1920', '2017', '3')).to.deep.equal({ laterAmount: 67, change: 10 });
    });

});