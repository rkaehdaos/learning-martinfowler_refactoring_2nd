export class Site {
    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return this._customer;
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

class UnknownCustomer {
    get isUnknown() {return true;}
}

// 특이케이스 검사 코드
function isUnknown(arg) {
    if (!((arg instanceof Customer) || (arg === "미확인 고객")))
        throw new Error(`잘못된 값과 비교: <${arg}>`);
    return (arg === "미확인 고객");
}


// 클라이언트1
export function customerName(site) {
    const aCustomer = site.customer;
    // ... 수많은 코드 ...
    let customerName;
    if (isUnknown(aCustomer)) customerName = "거주자";
    else customerName = aCustomer.name;

    return customerName;
}

// 클라이언트2
const registry = {
    billingPlans: {
        basic: "basic"
    }
};

export function billingPlan(aCustomer) {
    const plan = (isUnknown(aCustomer)) ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;

    return plan;
}

// 클라이언트 3

export function changeBillingPlan(aCustomer, newPlan) {
    if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
    return aCustomer;
}

// 클라이언트 4
export function weeksDelinquent(aCustomer) {
    const weeksDelinquent = (isUnknown(aCustomer)) ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    return weeksDelinquent;
}
