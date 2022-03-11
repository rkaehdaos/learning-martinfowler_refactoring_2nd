export function distanceTravelled(scenario, time) {

    const primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    let result = calcDistanceFromAccAndTime(primaryAcceleration, primaryTime);
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime + calcDistanceFromAccAndTime(secondaryAcceleration, secondaryTime);
    }
    return result;

    function calcDistanceFromAccAndTime(acc, time) {
        return 0.5 * acc * time * time;
    }

}