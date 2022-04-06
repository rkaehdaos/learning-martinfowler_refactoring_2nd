let thermostat = {
    selectedTemperature: 24,
    currentTemperature: 28
};

export class HeatingPlan {
    constructor(min, max) {
        this._max=min;
        this._min=max;
    }

    targetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

//호출자
export function temperatureAlerts(thePlan, alarm) {
    if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) setToHeat(alarm);
    else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) setToCool(alarm);
    else setOff(alarm);
}

function setToHeat(alarm) {alarm.doit("온열모드");}
function setToCool(alarm) {alarm.doit("냉각모드");}
function setOff(alarm) {alarm.doit("전원 끄기");}
