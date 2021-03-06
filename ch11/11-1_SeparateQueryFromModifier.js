export function findMiscreant(people, alarm) {
    for (const p of people) {
        if (p === "조커") return "조커";
        if (p === "사루만") return "사루만";
    }
    return "";
}

export function alertForMiscreant(people, alarm) {
    const miscreant = findMiscreant(people);
    if (miscreant !== "") setOffAlarms(alarm, miscreant);
}

function setOffAlarms(alarm, p) {
    alarm.setOff("악당 경고: " + p);
}