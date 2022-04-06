export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) &&
            (aNumberRange.high <= this._temperatureRange.high);
    }
}

//호출자
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    const tempRange = aRoom.daysTempRange;
    const isWithinRange = aPlan.withinRange(tempRange);
    if (!isWithinRange)
        alerts.push("방 온도가 지정 범위를 벗어났습니다.");
    return alerts;
}