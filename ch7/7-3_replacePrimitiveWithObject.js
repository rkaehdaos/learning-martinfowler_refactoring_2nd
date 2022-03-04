class Order {
    constructor(data) {
        this.priority = data.priority;
        this.orderNum = data.orderNum;
    }

    get priority() {return this._priority;}
    set priority(aString) {this._priority = aString;}
    get orderNum() {return this._orderNum;}
    set orderNum(value) {this._orderNum = value;}
}

export {Order};