export class Site {
    constructor(customer) {
        this._customer = customer;
    }

    get customer() {
        return this._customer;
    }
}


export class Customer {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get billingPlan() {

    }

    set billingPlan(arg) {

    }

    get paymentHistory() {

    }

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
