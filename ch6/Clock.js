class Clock {

    constructor(date) {
        this.date = date;
    }

    static today() {
        return new this(new Date(Date.now()));
    }
    static fromStringDate(str) {
        return new this(new Date(str));
    }

    getFullYear() { return this.date.getFullYear(); }
    getMonth() { return this.date.getMonth(); }
    getDate() { return this.date.getDate(); }

}

export {Clock};