function adjustedCapital(anInstrument) {

    if ((anInstrument.capital <= 0) || (anInstrument.interestRate <= 0 || anInstrument.duration <= 0)) return 0;
    let result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    return result;
}

export {adjustedCapital};