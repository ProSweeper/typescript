"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error("Index out of bounds");
    }
    swap(leftIdx, rightIdx) {
        const temp = this.at(leftIdx).value;
        this.at(leftIdx).value = this.at(rightIdx).value;
        this.at(rightIdx).value = temp;
    }
    compare(leftIdx, rightIdx) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(leftIdx).value > this.at(rightIdx).value;
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
