function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class ScoringGuide {
    stateWithLowCertification(state) {
        return state < 5
    }
}

class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    execute() {
        this._result = 0;
        this._healthLevel = 0;
        this._highMedicalRiskFlag = 0;
        this.scoreSmoking();

        this._certificationGrade = "regular";
        this.scoreWithState();

        // 비슷하게 함수로 추출

        this._result -= Math.max(this._healthLevel - 5, 0);
        return this._result;
    }

    scoreWithState() {
        if (this._scoringGuide.stateWithLowCertification(this._candidate.originState)) {
            this._certificationGrade = "low";
            this._result -= 5;
        }
    }

    scoreSmoking() {
        if (this._medicalExam.isSmoker) {
            this._healthLevel += 10;
            this._highMedicalRiskFlag = true;
        }
    }
}

export {score, ScoringGuide, Scorer};
