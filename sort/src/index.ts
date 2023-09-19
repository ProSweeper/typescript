import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";

const array = [1, -5, 10, 4, 2];
const nums = new NumberCollection(array);
const sorter = new Sorter(nums);
sorter.sort();
console.log(sorter.collection);