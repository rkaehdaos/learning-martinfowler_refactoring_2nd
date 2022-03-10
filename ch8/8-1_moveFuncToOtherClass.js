class Account {
    constructor(accountType, daysOverdrawn) {
        this.type = accountType;
        this._daysOverdrawn = daysOverdrawn;
    }
    // 은행 이자 계산
    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this);
        return result;
    }

}

class AccountType {
    constructor(type) {
        this._type = type;
    }
    get isPremium() {
        return this._type === 'Premium';
    }

    overdraftCharge(account) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (account._daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (account._daysOverdrawn - 7) * 0.85;
        } else
            return account._daysOverdrawn * 1.75;
    }
}

export {Account,AccountType};