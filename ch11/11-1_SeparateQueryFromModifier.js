function findMiscreant (people, alarm) {
    for (const p of people) {
        if (p === "조커") {
            return "조커";
        }
        if (p === "사루만") {
            return "사루만";
        }
    }
    return "";
}

function alertForMiscreant (people, alarm) {
    for (const p of people) {
        if (p === "조커") {
            setOffAlarms(alarm, p);
        }
        if (p === "사루만") {
            setOffAlarms(alarm, p);
        }
    }
}

function setOffAlarms(alarm, p) {
    alarm.setOff("악당 경고: " + p);
}

export {alertForMiscreant, findMiscreant};