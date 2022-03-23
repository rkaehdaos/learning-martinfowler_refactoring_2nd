function payAmount(employee) {
    if (employee.isSeparated) return {amount: 0, resonCode: "SEP"};
    if (employee.isRetired) return {amount: 0, resonCode: "RET"};
    //급여 계산로직
    // lorem.ipsum(dolor.sitAmet);
    // consectetur(adipiscing).elit();
    // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    // ut.enim.ad(minim.veniam);
    // return someFinalComputation();
    return {amount: 1000, resonCode: "OK"};
}

export {payAmount};