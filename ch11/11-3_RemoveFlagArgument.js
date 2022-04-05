export function deliveryDate(anOrder, isRush) {
    if (isRush) return rushDeliveryDate(anOrder);
    else        return regularDeliveryDate(anOrder);

}

function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

export class Order {
    constructor(id, title, deliveryState) {
        this._id = id;
        this._title = title;
        this._deliveryState = deliveryState;
        this.PlacedOn = class {
            constructor() {
                this._days = 0;
            }

            plusDays(arg) {
                return this._days = this._days + arg;
            }
        };
        this.placedOn = new this.PlacedOn;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get deliveryState() {
        return this._deliveryState;
    }
}
