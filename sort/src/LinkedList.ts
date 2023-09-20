import { ISortable } from "./Sorter";

interface INode {
  value: number;
  next: Node | null;
}
class Node implements INode {
  next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedList implements ISortable {
  head: Node | null = null;

  add(data: number): void {
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
  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error("Index out of bounds");
  }

  swap(leftIdx: number, rightIdx: number): void {
    const temp = this.at(leftIdx).value;
    this.at(leftIdx).value = this.at(rightIdx).value;
    this.at(rightIdx).value = temp;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(leftIdx).value > this.at(rightIdx).value;
  }

  get length(): number {
    if (!this.head) return 0;
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
