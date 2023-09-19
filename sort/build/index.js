"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const array = [1, -5, 10, 4, 2];
const nums = new NumbersCollection_1.NumberCollection(array);
const sorter = new Sorter_1.Sorter(nums);
sorter.sort();
console.log(sorter.collection);
