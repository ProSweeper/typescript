"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLocaleLowerCase() > this.data[rightIdx].toLocaleLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const stringArray = this.data.split("");
        const temp = stringArray[leftIdx];
        stringArray[leftIdx] = stringArray[rightIdx];
        stringArray[rightIdx] = temp;
        this.data = stringArray.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
