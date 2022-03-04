class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        this._value = value;
    }
    toString() {return this._value;}
}

class Order {
    constructor(data) {
        this.priority = data.priority;
        this.orderNum = data.orderNum;
    }

    get priority() {return this._priority;}
    get priorityString() {return this._priority.toString();}
    set priority(aString) {this._priority = new Priority(aString);}
    get orderNum() {return this._orderNum;}
    set orderNum(value) {this._orderNum = value;}
}

export {Order, Priority};