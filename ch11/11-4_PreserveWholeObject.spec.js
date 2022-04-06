import {expect} from "chai";
import {HeatingPlan, temperatureAlerts} from "./11-4_PreserveWholeObject.js";

describe('11-4 실내온도 모니터링 시스템', () => {
    it('최저,최고가 계획 범위 이내라면 alert 없음', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: 1,
                high: 2
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql([]);
    });

    it('최저 온도가 계획 최저값밖이면 alert', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: -1,
                high: 2
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql(["방 온도가 지정 범위를 벗어났습니다."]);
    });

    it('최고 온도가 계획 최고값밖이면 alert', () => {
        const alerts = temperatureAlerts({
            daysTempRange: {
                low: 1,
                high: 4
            }
        }, new HeatingPlan({low: 0, high: 3}));

        expect(alerts).to.eql(["방 온도가 지정 범위를 벗어났습니다."]);
    });
});