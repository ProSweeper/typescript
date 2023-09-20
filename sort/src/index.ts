import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
// const array = [1, -5, 10, 4, 2];
// const nums = new NumberCollection(array);
// const sorter = new Sorter(nums);
// sorter.sort();
// console.log(sorter.collection);
const list = new LinkedList();

list.add(40);
list.add(-12);
list.add(4);
list.add(1);

list.print();

const sorter = new Sorter(list);
sorter.sort();

list.print();