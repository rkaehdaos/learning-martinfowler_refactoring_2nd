function disabilityAmount(anEmployee) {
    // 검사
    if ((anEmployee.seniority < 2)
        || (anEmployee.monthDisabled > 12)) return 0;
    if (anEmployee.isPartTime) return 0;
    // 장애 수당 계산
    return 100;
}

export {disabilityAmount}