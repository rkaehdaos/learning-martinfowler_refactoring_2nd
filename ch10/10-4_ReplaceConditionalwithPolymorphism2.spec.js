import {expect} from "chai";
import {rating} from "./10-4_ReplaceConditionalwithPolymorphism2.js";

describe('10-4 예시2 : 변형동작을 다형성으로 표현', () => {
    it('A', () => {
        const voyage = {zone: "중국", length: 15};
        const history = [
            {zone: "중국", profit: 100},
        ];
        expect(rating(voyage, history)).to.equal("A");
    });

    it('B', () => {
        const voyage = {zone: "서인도", length: 10};
        const history = [
            {zone: "동인도", profit: 5},
            {zone: "서인도", profit: 15},
            {zone: "중국", profit: -2},
            {zone: "서아프리카", profit: 7},
        ];
        expect(rating(voyage, history)).to.equal("B");
    });
});