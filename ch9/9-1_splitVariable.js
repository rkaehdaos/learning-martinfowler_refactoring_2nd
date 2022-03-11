export function distanceTravelled(scenario, time) {

    const primaryAcceleration = calcAccFromForceAndMass(scenario.primaryForce, scenario.mass);
    let primaryTime = Math.min(time, scenario.delay);
    let result = calcDistanceFromAccAndTime(primaryAcceleration, primaryTime);
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = calcAccFromForceAndMass(scenario.secondaryForce, scenario.mass, primaryAcceleration);
        result += calcDistanceFromAccAndTime(secondaryAcceleration, secondaryTime, primaryVelocity);
    }
    return result;

    function calcDistanceFromAccAndTime(acc, time, currentVelocity = 0) {
        return currentVelocity * time + 0.5 * acc * time * time;
    }

    function calcAccFromForceAndMass(force, mass, currentAcc=0){
        return currentAcc + force / mass;
    }

}
