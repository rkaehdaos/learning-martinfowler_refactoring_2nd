// 정상 범위를 벗어난 측정값을 찾는 함수
function readingsOutsideRange(station, min, max) {
    return station.readings.filter((r) => r.temp < min || r.temp > max)
}

export {readingsOutsideRange};