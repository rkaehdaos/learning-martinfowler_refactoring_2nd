import {expect} from "chai";
import {helloWorld} from "./hello.js";

describe('mocha test',() => {
    it('helloWorld', () => {
        expect(helloWorld()).equals('helloWorld Mocha~');
    });
})