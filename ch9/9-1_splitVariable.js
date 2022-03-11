export function distanceTravelled(scenario, time) {

    const primaryAcceleration = calcAccFromForceAndMass(scenario.primaryForce, scenario.mass);
    let primaryTime = Math.min(time, scenario.delay);
    let distance = calcDistanceFromAccAndTime(primaryAcceleration, primaryTime);
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        const primaryVelocity = primaryAcceleration * scenario.delay;
        const secondaryAcceleration = calcAccFromForceAndMass(scenario.secondaryForce, scenario.mass, primaryAcceleration);
        distance += calcDistanceFromAccAndTime(secondaryAcceleration, secondaryTime, primaryVelocity);
    }
    return distance;

}
function calcDistanceFromAccAndTime(acc, time, currentVelocity = 0) {
    return currentVelocity * time + 0.5 * acc * time * time;
}

function calcAccFromForceAndMass(force, mass, currentAcc=0){
    return currentAcc + force / mass;
}

