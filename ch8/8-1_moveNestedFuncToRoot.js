function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance; //km당 xxx시간 pace
    return {
        time: totalTime,
        distance: totalDistance,
        pace: pace
    };

    function calculateDistance() {
        let result = 0;
        for (let i = 1; i < points.length; i++) {
            result += distance(points[i - 1], points[i]);
        }
        return result;
    }

    // 두 지점의 거리 계산
    function distance(p1, p2) {
        // 하버사인 공식 https://kayuse88.github.io/haversine
        const EARTH_RADIUS = 6371; // km

        const deltaLatitude = Math.abs(radians(p1.lat - p2.lat));
        const deltaLongitude = Math.abs(radians(p1.lon - p2.lon));

        const sinDeltaLat = Math.sin(deltaLatitude / 2);
        const sinDeltaLng = Math.sin(deltaLongitude / 2);
        const squareRoot = Math.sqrt(
            sinDeltaLat * sinDeltaLat +
            Math.cos(radians(p1.lat)) * Math.cos(radians(p2.lat)) * sinDeltaLng * sinDeltaLng);

        const result = 2 * EARTH_RADIUS * Math.asin(squareRoot);
        return result;
    }

    function radians(degrees) {return degrees * Math.PI / 180;} // 라디안 값으로 변환

    // 총 시간 계산
    function calculateTime() {return 300;} //대충 5시간
}

export {trackSummary};


