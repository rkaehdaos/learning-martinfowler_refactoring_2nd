export function distanceTravelled(scenario, time) {

    const primaryAcceration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    let result = calcDistanceFromAccAndTime(primaryAcceration, primaryTime);
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceration * scenario.delay;
        const secondaryAcceration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime + calcDistanceFromAccAndTime(secondaryAcceration, secondaryTime);
    }
    return result;

    function calcDistanceFromAccAndTime(acc, time) {
        return 0.5 * acc * time * time;
    }

}