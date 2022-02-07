function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost: 10, production: 9},
            {name: "Attalia", cost: 12, production: 10},
            {name: "Sinope", cost: 10, production: 6},
        ],
        demand: 30,
        price: 20
    };
}

class Province {
    constructor(doc) {
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(value => this.addProducer(new Producer(this, value)));
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    //getters
    get name() {return this._name;}
    get producers() {return this._producers.slice();} //slice return
    get totalProduction() {return this._totalProduction;}
    get demand() {return this._demand;}
    get price() {return this._price;}

    //setters
    set totalProduction(value) {this._totalProduction = value;}
    set demand(value) {this._demand = parseInt(value);}         //숫자로 파싱해서 저장
    set price(value) {this._price = parseInt(value);}           //숫자로 파싱해서 저장
}

class Producer {
    constructor(province, value) {
    }
}