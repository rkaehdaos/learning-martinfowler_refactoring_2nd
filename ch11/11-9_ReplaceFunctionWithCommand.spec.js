import {expect} from 'chai';
import {score, ScoringGuide,Scorer} from "./11-9_ReplaceFunctionWithCommand.js";

describe('11-9 함수를 명령으로 대체', () => {
    it('흡연자가 낮은 state일 때 점수', () => {
        const lowCertificationStateCandidate = {
            originState: 4
        };

        const smokerMedicalExam = {
            isSmoker: true
        };

        expect(score(lowCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(-10);
    });

    it('흡연자가 높은 state일 때 점수', () => {
        const highCertificationStateCandidate = {
            originState: 5
        };

        const smokerMedicalExam = {
            isSmoker: true
        };

        expect(score(highCertificationStateCandidate, smokerMedicalExam, new ScoringGuide())).to.equal(-5);
    });

    it('비흡연자가 낮은 state일 때 점수', () => {
        const lowCertificationStateCandidate = {
            originState: 4
        };

        const nonSmokerMedicalExam = {
            isSmoker: false
        };

        expect(score(lowCertificationStateCandidate, nonSmokerMedicalExam, new ScoringGuide())).to.equal(-5);
    });

    it('비흡연자가 높은 state일 때 점수', () => {
        const highCertificationStateCandidate = {
            originState: 5
        };

        const nonSmokerMedicalExam = {
            isSmoker: false
        };

        expect(score(highCertificationStateCandidate, nonSmokerMedicalExam, new ScoringGuide())).to.equal(0);
    });
});
