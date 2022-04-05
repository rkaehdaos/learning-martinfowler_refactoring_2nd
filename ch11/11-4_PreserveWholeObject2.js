export class HeatingPlan {
    constructor(temperatureRange) {
        this._temperatureRange = temperatureRange;
    }

    xxNewwithinRange(tempRange) {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = (low >= this._temperatureRange.low)
            && (high <= this._temperatureRange.high);
        return isWithinRange;
    }
}

//호출자
export function temperatureAlerts(aRoom, aPlan) {
    const alerts = [];
    const tempRange = aRoom.daysTempRange;
    const isWithinRange = aPlan.xxNewwithinRange(tempRange);
    if (!isWithinRange)
        alerts.push("방 온도가 지정 범위를 벗어났습니다.");
    return alerts;
}