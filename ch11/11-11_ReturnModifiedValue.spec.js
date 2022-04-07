import {expect} from 'chai';
import {calculateWithGpsSignal} from "./11-11_ReturnModifiedValue.js";

describe('11-11 수정값 반환: 고도상승 계산', () => {
    it('10→20까지 10 이동하는데 100분이면 분당 0.1', () => {
        expect(calculateWithGpsSignal([{elevation: 10}, {elevation: 20}], 100)).to.equal(0.1);
    });
});
