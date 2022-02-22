import {Clock} from "./Clock.js";

function printBanner() {
    console.log('*****************');
    console.log('**** 고객 채무 ****');
    console.log('*****************');
}

function calculateOutstanding() {
    return 100;
}

function printOwing(invoice) {
    let outstanding = 0;
    printBanner();
    outstanding = calculateOutstanding();
    // const today = new Date(Date.now());
    // const today = Clock.day('2017-01-26');
    const today = Clock.today()

    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+30);
    printDetails();

    function printDetails() {
        //세부사항 출력
        console.log(`고객명: ${invoice.customer}`);
        console.log(`채무액: ${outstanding}`);
        console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
    }
}

export {printOwing};