import {expect} from "chai";
import {trackSummary} from "./8-1_moveNestedFuncToRoot.js";

describe('8-1', () => {
    it('테스트', () => {
        const seoul = {"lat": 37.547889, "lon": 126.997128};
        const busan = {"lat": 35.158874, "lon": 129.043846};
        const points = [
        {"lat": 37.547889, "lon": 126.997128},
        {"lat": 35.158874, "lon": 129.043846}
        ];

        const predictResult = {
                "distance": 322.72224899963976,
                "pace": 0.01549319892104985,
                "time": 300
            };
        expect(trackSummary(points)).to.deep.equals(predictResult);
    });
});