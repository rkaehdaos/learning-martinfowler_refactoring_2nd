let invoiceData = require('./invoices.json');
let playData = require('./plays.json');
const {statement} = require("./statement.js");
test('ㅇㅇㅇ', () => {
    expect(statement(invoiceData, playData)).toEqual(1625);
})