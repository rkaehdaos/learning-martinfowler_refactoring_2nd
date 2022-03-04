class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}>는 유효하지 않은 우선순위입니다.`);
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ['low', 'normal', 'high', 'rush'];}
    equals(other) {return this._index === other._index;}
    higherThan(other) {return this._index > other._index;}
    lowerThan(other) {return this._index < other._index;}

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