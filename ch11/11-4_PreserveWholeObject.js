export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low)
            && (top <= this._temperatureRange.high);
    }

    xxNewWithinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}

//호출자
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    if (!aPlan.xxNewWithinRange(aRoom.daysTempRange))
        alerts.push("방 온도가 지정 범위를 벗어났습니다.");
    return alerts;
}


