import {expect} from "chai";
import {calcaulateTop} from "./11-12_ReplaceErrorCodeWithException.js";

describe('11-12 예외처리', () => {

    it('리스트는 에러 없음', () => {
        let errorList = []
        calcaulateTop({country: "서울"}, errorList);
        expect(errorList).to.empty;
    });
    it('리스트는 에러 있음', () => {
        let errorList = []
        calcaulateTop({country: "아산"}, errorList);
        expect(errorList).to.not.empty;
    });

});