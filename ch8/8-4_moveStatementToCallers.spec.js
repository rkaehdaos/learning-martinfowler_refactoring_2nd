import {expect} from "chai";
import {Writable} from "stream";
import Util from "util";
import {listRecentPhotos, renderPerson} from "./8-4_moveStatementToCallers.js";




describe('8-4', () => {
    it('renderPerson', () => {
        const aPerson = {
            name: "Ahn",
            photo: {
                title: "withDaughter",
                location: "Seoul",
                date: new Date()
            }
        };
        let wstream = new WMStrm('renderPerson');
        renderPerson(wstream, aPerson);
        expect(memStore.renderPerson.toString()).equals('<p>Ahn</p>\n' +
            '<p>title: withDaughter</p>\n' +
            '<p>date: Fri Mar 11 2022</p>\n' +
            '<p>location: Seoul</p>\n');
    });
    it('listRecentPhotos', () => {
        const photos = [
            {
                title: "withDaughter",
                location: "Seoul",
                date: new Date()
            },
            {
                title: "withSon",
                location: "Busan",
                date: new Date()
            },
            {
                title: "withWife",
                location: "Asan",
                date: new Date()
            }
        ];
        let wstream = new WMStrm('renderPerson');
        listRecentPhotos(wstream, photos);
        expect(memStore.renderPerson.toString()).equals('<div>\n' +
            '<p>title: withDaughter</p>\n' +
            '<p>date: Fri Mar 11 2022</p>\n' +
            '<p>location: Seoul</p>\n' +
            '</div>\n' +
            '<div>\n' +
            '<p>title: withSon</p>\n' +
            '<p>date: Fri Mar 11 2022</p>\n' +
            '<p>location: Busan</p>\n' +
            '</div>\n' +
            '<div>\n' +
            '<p>title: withWife</p>\n' +
            '<p>date: Fri Mar 11 2022</p>\n' +
            '<p>location: Asan</p>\n' +
            '</div>\n');
    });
});

let writable = Writable;
let util = Util;
let memStore = {};

// 메모리 스트림
function WMStrm(key, options) {
    // new 없이 사용가능하도록
    if (!(this instanceof WMStrm))
        return new WMStrm(key, options);
    writable.call(this, options); // super의 초기화
    this.key = key;
    memStore[key] = new Buffer('');
}

util.inherits(WMStrm, writable);
WMStrm.prototype._write = function (chunk, enc, cb) {
    // 버퍼 형태로 일단 memory store 에 저장
    let buffer = (Buffer.isBuffer(chunk)) ? chunk : new Buffer(chunk, enc); //버퍼면 바로 저장하고 아니면 컨버팅해서 저장
    // 기존 버퍼에 추가
    memStore[this.key] = Buffer.concat([memStore[this.key], buffer]);
    cb();
};