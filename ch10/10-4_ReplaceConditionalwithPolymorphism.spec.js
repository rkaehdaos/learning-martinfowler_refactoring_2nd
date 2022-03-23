import {expect} from "chai";
import {plumages, speeds} from "./10-4_ReplaceConditionalwithPolymorphism.js";

describe('10-4 조건부 로직을 다형성으로 바꾸기', () => {
    const birdList = [
        {name: 'bird1', type: '까마귀'},
        {name: 'bird2', type: '유럽 제비'},
        {name: 'bird3', type: '아프리카 제비', numberOfCoconuts: 3},
        {name: 'bird4', type: '아프리카 제비', numberOfCoconuts: 2},
        {name: 'bird5', type: '노르웨이 파랑 앵무', numberOfCoconuts: 3, voltage: 300, isNailed: false},
        {name: 'bird6', type: '노르웨이 파랑 앵무', numberOfCoconuts: 3, voltage: 300, isNailed: true},
    ];
    const birdsPlumageList = plumages(birdList);
    const birdsSpeedList = speeds(birdList);

    it('모르는 이름의 case', () => {
        expect(birdsPlumageList.get('bird1')).to.equal('알 수 없다');
        expect(birdsSpeedList.get('bird1')).to.equal(null);
    });

    it('유럽 제비', () => {
        expect(birdsPlumageList.get('bird2')).to.equal('보통이다');
        expect(birdsSpeedList.get('bird2')).to.equal(35);
    });
    it('아프리카 제비 - 코코넛 3', () => {
        expect(birdsPlumageList.get('bird3')).to.equal('지쳤다');
        expect(birdsSpeedList.get('bird3')).to.equal(34);
    });
    it('아프리카 제비 - 코코넛 2', () => {
        expect(birdsPlumageList.get('bird4')).to.equal('보통이다');
        expect(birdsSpeedList.get('bird4')).to.equal(36);
    });

    it('노르웨이 파랑 앵무', () => {
        expect(birdsPlumageList.get('bird5')).to.equal('그을렸다');
        expect(birdsSpeedList.get('bird5')).to.equal(40);
    });
    it('노르웨이 파랑 앵무 - isNailed', () => {
        expect(birdsPlumageList.get('bird6')).to.equal('그을렸다');
        expect(birdsSpeedList.get('bird6')).to.equal(0);
    });


});