let invoiceData = require('./invoices.json');
let playData = require('./plays.json');
const {statement} = require("./statement.js");
test('ㅇㅇㅇ', () => {
    expect(statement(invoiceData, playData)).toContain("총액: $1,625.00");
    expect(statement(invoiceData, playData)).toContain("적립 포인트: 47점");

})