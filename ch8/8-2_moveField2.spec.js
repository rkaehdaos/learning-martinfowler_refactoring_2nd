import {expect} from "chai";
import {Account,AccountType} from "./8-2_moveField2.js";

describe('8-2공유객체로이동', () => {
    it('basic', () => {
        const account = new Account(15000, 'A', 2.5);
        expect(account.interestRate).equals(2.5);
    });
});