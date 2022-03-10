import {expect} from "chai";
import {Account, AccountType} from "./8-1_moveFuncToOtherClass.js";

describe('8-1다른클래스로옮기기', () => {
    it('초과 없으면 모든 계좌는 4.5', () => {

        expect(new Account(new AccountType('NonPremium'), 0).bankCharge).equals(4.5);
        expect(new Account(new AccountType('Premium'), 0).bankCharge).equals(4.5);
    });
    it('일반 구좌 초과 테스트:1일당 1.75', () => {
        expect(new Account(new AccountType('NonPremium'), 1).bankCharge).equals(6.25);
        expect(new Account(new AccountType('NonPremium'), 2).bankCharge).equals(8.00);
        expect(new Account(new AccountType('NonPremium'), 3).bankCharge).equals(9.75);
        expect(new Account(new AccountType('NonPremium'), 100).bankCharge).equals(179.5);
    });

    it('프리미엄:단기는 더 비싸지만 연체가 오래될 수록 유리', () => {
        // 7이하시 14.5 유지
        for (let i = 1; i <= 7; i++)
            expect(new Account(new AccountType('Premium'), i).bankCharge).equals(14.5);
        // 8부터 0.85씩
        expect(new Account(new AccountType('Premium'), 8).bankCharge).equals(15.35);
        expect(new Account(new AccountType('Premium'), 9).bankCharge).equals(16.2);
        expect(new Account(new AccountType('Premium'), 10).bankCharge).equals(17.05);
        expect(new Account(new AccountType('Premium'), 100).bankCharge).equals(93.55);
    });

});