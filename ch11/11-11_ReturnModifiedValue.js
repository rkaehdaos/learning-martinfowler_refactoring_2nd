export function calculateWithGpsSignal(points, totalMinutes) {
    let totalAscent = 0;
    let totalTime = 0;
    let totalDistance = 0;
    totalAscent = calculateAscent();
    calculateTime();
    calculateDistance();
    return totalAscent / totalMinutes;

    function calculateAscent() {
        for (let i = 1; i < points.length; i++) {
            const verticalChange = points[i].elevation - points[i - 1].elevation;
            totalAscent += (verticalChange > 0) ? verticalChange : 0;
        }
        return totalAscent;
    }

    function calculateTime() {}
    function calculateDistance() {}
}