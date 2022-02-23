import {assert, expect} from "chai";
import {printOwing} from "./6-1_ExtractFunction.js"
let invoice={
    "customer": "BigCo",
    "orders": [
        {
            orderId : 1,
            orderTitle : "title1",
            amount : 1
        },
        {
            orderId : 2,
            orderTitle : "title2",
            amount : 10
        }
    ],
    "performances": [
        {
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "as-like",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
};

describe('함수추출하기',() => {
    it('should 1', () => {
        printOwing(invoice);
    });

});