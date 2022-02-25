import {assert, expect} from "chai";
import {readingsOutsideRange} from "./6-8_introduceParameterObject.js";

// 온도 측정값
const station = {
    name: 'ZB1',
    readings: [
        {temp: 47, time: '2016-11-10 09:10'},
        {temp: 53, time: '2016-11-10 09:20'},
        {temp: 58, time: '2016-11-10 09:30'},
        {temp: 53, time: '2016-11-10 09:40'},
        {temp: 51, time: '2016-11-10 09:50'},
    ],
};

// 플랜
const operatingPlan = {
    temperatureFloor: 50,
    temperatureCeiling: 60
}



describe('매개변수 객체 만들기',() => {
    it('호출',()=>{
        const result = readingsOutsideRange(station,operatingPlan.temperatureFloor,operatingPlan.temperatureCeiling)
        console.log(result)
        expect(result).is.not.null
    })
})