import {expect} from "chai";
import {distanceTravelled} from "./9-1_splitVariable.js";

describe('9-1변수쪼개기', () => {
    it('첫 번째 힘 테스트, 가속도 2', () => {
        const scenario = {
            "primaryForce": 10,
            "mass": 5,
            "delay": 10
        };
        expect(distanceTravelled(scenario, 3)).equals(9);
        expect(distanceTravelled(scenario, 5)).equals(25);
        expect(distanceTravelled(scenario, 10)).equals(100);
    });
    it('두번째 힘 테스트, 2nd가속도 6', () => {
        const scenario = {
            "primaryForce": 10,
            "mass": 5,
            "delay": 10,
            "secondaryForce":20
        };
        expect(distanceTravelled(scenario, 3)).equals(9);
        expect(distanceTravelled(scenario, 5)).equals(25);
        expect(distanceTravelled(scenario, 10)).equals(100);
        expect(distanceTravelled(scenario, 15)).equals(275);
    });

});