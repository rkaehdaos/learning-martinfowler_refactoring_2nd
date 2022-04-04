export class Site {
    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
    }
}


export class Customer {
    constructor(name, billingPlan, paymentHistory) {
        this._name = name;
        this._billingPlan = billingPlan;
        this._paymentHistory = paymentHistory;
    }

    get name() {
        return this._name;
    }

    get billingPlan() {
        return this._billingPlan;
    }

    set billingPlan(arg) {
        this._billingPlan = arg;
    }

    get paymentHistory() {
        return this._paymentHistory;
    }

    get isUnknown() {return false;}

}

export class UnknownCustomer {
    get isUnknown() {return true;}
    get name() {return "거주자";}
}

// 특이케이스 검사 코드
function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg instanceof UnknownCustomer)))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return arg.isUnknown;
}


// 클라이언트1
export function customerName(site) {
    // ... 수많은 코드 ...
    return site.customer.name;
}

// 클라이언트2
const registry = {
    billingPlans: {
        basic: "basic"
    }
};

export function billingPlan(site) {
    const aCustomer = site.customer;
    const plan = (isUnknown(aCustomer)) ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;

    return plan;
}

// 클라이언트 3

export function changeBillingPlan(site, newPlan) {
    const aCustomer = site.customer;
    if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
    return aCustomer;
}

// 클라이언트 4
export function weeksDelinquent(site) {
    const aCustomer = site.customer;
    const weeksDelinquent = (isUnknown(aCustomer)) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    return weeksDelinquent;
}
