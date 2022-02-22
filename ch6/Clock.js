class Clock {

    constructor(date) { this.date = date; }

    static createInstance(arg) {
        return new Proxy(new this(new Date(arg)),
            {get: (target, prop) => () => target.date[prop]()});
    }

    static today() { return this.createInstance(Date.now()); }
    static day(arg) { return this.createInstance(arg); }
}

export {Clock};