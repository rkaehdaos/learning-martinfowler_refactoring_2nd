export function rushDeliveryDate(anOrder) {return deliveryDate(anOrder,true);}
export function regularDeliveryDate(anOrder) {return deliveryDate(anOrder,false);}


export function deliveryDate(anOrder, isRush) {
    let result;
    let deliveryTime;
    if (anOrder.deliveryState==="MA"||anOrder.deliveryState==="CT")
        deliveryTime = isRush ? 1 : 2;
    else if (anOrder.deliveryState==="NY"||anOrder.deliveryState==="NH"){
        deliveryTime = 2;
        if (anOrder.deliveryState==="NH" && !isRush)
            deliveryTime = 3;
    }
    else if (isRush)
        deliveryTime = 3;
    else if (anOrder.deliveryState==="ME")
        deliveryTime = 3;
    else
        deliveryTime = 4;
    result = anOrder.placedOn.plusDays(2 + deliveryTime);
    if (isRush) result-=1;
    return result;

}

export class Order {
    constructor(id, title, deliveryState) {
        this._id = id;
        this._title = title;
        this._deliveryState = deliveryState;
        this.PlacedOn = class {
            constructor() {this._days = 0;}
            plusDays(arg) {return this._days=this._days+arg;}
        };
        this.placedOn= new this.PlacedOn;
    }
    get id() {return this._id;}
    get title() {return this._title;}
    get deliveryState() {return this._deliveryState;}
}
