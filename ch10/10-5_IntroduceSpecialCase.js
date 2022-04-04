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
    if (!((arg instanceof Customer) || (arg === "unknown")))
        throw new Error(`investigate bad value: <${arg}>`);
    return (arg === "unknown");
}


// 클라이언트1
export function customerName(site) {
    const aCustomer = site.customer;
    // ... 수많은 코드 ...
    let customerName;
    if (aCustomer === "미확인 고객") customerName = "거주자";
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
    const plan = (aCustomer === "미확인 고객") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;

    return plan;
}

// 클라이언트 3

export function changeBillingPlan(aCustomer, newPlan) {
    if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;
    return aCustomer;
}

// 클라이언트 4
export function weeksDelinquent(aCustomer) {
    const weeksDelinquent = (aCustomer === "미확인 고객") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
    return weeksDelinquent;
}
