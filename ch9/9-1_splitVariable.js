export function distanceTravelled(scenario, time) {

    const primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    let result = calcDistanceFromAccAndTime(primaryAcceleration, primaryTime, 0);
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += calcDistanceFromAccAndTime(secondaryAcceleration, secondaryTime, primaryVelocity);
    }
    return result;

    function calcDistanceFromAccAndTime(acc, time, currentVelocity) {
        return currentVelocity * time + 0.5 * acc * time * time;
    }

}