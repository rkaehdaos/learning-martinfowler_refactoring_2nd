class Clock {

    constructor(date) {
        this.date = date;
    }
    static today() {
        return new Proxy(new this(new Date(Date.now())), {
            get(target, prop) {
                return () => target.date[prop]();
            }
        });
    }

    static fromStringDate(str) {
        return new Proxy(new this(new Date(str)), {
            get(target, prop) {
                return () => target.date[prop]();
            }
        });
    }
}

export {Clock};