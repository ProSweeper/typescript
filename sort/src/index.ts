import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";
const array = [1, -5, 10, 4, 2];
const nums = new NumberCollection(array);
nums.sort();
console.log(nums);
const list = new LinkedList();

list.add(40);
list.add(-12);
list.add(4);
list.add(1);

list.print();

list.sort();
list.print();