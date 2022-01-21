import playDate from './plays.json';
import invoiceData from './invoices.json';
const {statement} = require('./statement');
test('ㅇㅇㅇ', ()=>{
    expect(statement(invoiceData, playDate)).toEqual(1625);
})