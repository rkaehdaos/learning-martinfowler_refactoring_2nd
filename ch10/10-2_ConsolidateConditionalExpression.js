function disabilityAmount(anEmployee) {
    // 검사
    if (isNotEligibleForDisability()) return 0;

    // 장애 수당 계산
    return 100;
}

function isNotEligibleForDisability() { //장애 수당 적용 여부 확인
    return (anEmployee.seniority < 2)
        || (anEmployee.monthDisabled > 12)
        || (anEmployee.isPartTime);
}

export {disabilityAmount}