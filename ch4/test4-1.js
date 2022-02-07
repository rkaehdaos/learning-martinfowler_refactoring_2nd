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
        doc.producers.forEach(aData => this.addProducer(new Producer(this, aData)));
    }

    //getters and setters
    get name() {return this._name;}
    get producers() {return this._producers.slice();} //slice return
    get totalProduction() {return this._totalProduction;}
    set totalProduction(value) {this._totalProduction = value;}
    get demand() {return this._demand;}
    set demand(value) {this._demand = parseInt(value);}         //숫자로 파싱해서 저장
    get price() {return this._price;}
    set price(value) {this._price = parseInt(value);}           //숫자로 파싱해서 저장

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

    //생산 부족분
    get shortfall() {
        return this._demand - this.totalProduction;
    }

    //수익계산

    get profit() {
        return this.demandValue - this.demandCost;
    }

    get demandValue() {
        return this.satisfiedDemand * this.price;
    }

    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a, b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
        return result;
    }

}

class Producer {
    constructor(aProvince, aData) {
        this._province = aProvince;
        this._cost = aData.cost;
        this._name = aData.name;
        this._production = aData.production || 0;
    }

    get name() {return this._name;}
    get cost() {return this._cost;}
    set cost(value) {this._cost = parseInt(value);}
    get production() {return this._production;}

    //계산결과를 지역데이터에 갱신하는 코드가 지저분하지만 테스트 먼저 작성후 리팩터링하자
    set production(aMountStr) {
        const amount = parseInt(aMountStr);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}