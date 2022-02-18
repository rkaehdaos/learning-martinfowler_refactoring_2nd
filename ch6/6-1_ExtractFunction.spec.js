import {assert, expect} from "chai";
import {printOwing} from "./6-1_ExtractFunction.js"
let invoice={
    "customer": "BigCo",
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