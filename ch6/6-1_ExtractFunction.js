import {Clock} from "./Clock.js";

function printBanner() {
    console.log('*****************');
    console.log('**** 고객 채무 ****');
    console.log('*****************');
}

function calculateOutstanding(invoice) {
    return 100;
}

function printOwing(invoice) {
    let outstanding = 0;
    printBanner();
    outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice);

    printDetails(invoice, outstanding);
}

function printDetails(invoice, outstanding) {
    //세부사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function recordDueDate(invoice) {
    const today = Clock.today()
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

export {printOwing};