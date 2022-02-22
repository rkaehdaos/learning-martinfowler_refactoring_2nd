class Clock {

    constructor(date) {
        this.date = date;
    }

    static today() {
        return new this(new Date(Date.now()));
    }
    static fromString(str) {
        //new Date("2017-01-26");
        return new this(new Date(str));
    }

    getFullYear() { return this.date.getFullYear(); }
    getMonth() { return this.date.getMonth(); }
    getDate() { return this.date.getDate(); }

}

export {Clock};