function disabilityAmount(anEmployee) {
    if (isNotEligibleForDisability()) return 0;
    return 100;

    function isNotEligibleForDisability() { //장애 수당 적용 여부 확인
        return (anEmployee.seniority < 2)
            || (anEmployee.monthDisabled > 12)
            || (anEmployee.isPartTime);
    }
}

export {disabilityAmount};