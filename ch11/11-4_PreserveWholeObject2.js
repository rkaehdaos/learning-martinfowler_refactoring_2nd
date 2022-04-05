export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low)
            && (top <= this._temperatureRange.high);
    }
}

//호출자
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    const tempRange = aRoom.daysTempRange;
    const isWithinRange = xxNewwithinRange(tempRange, aPlan);
    if (!isWithinRange)
        alerts.push("방 온도가 지정 범위를 벗어났습니다.");
    return alerts;
}

function xxNewwithinRange(tempRange, aPlan) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
}