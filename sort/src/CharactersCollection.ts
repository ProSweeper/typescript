import { ISortable } from "./Sorter";

export class CharactersCollection implements ISortable{
	constructor(public data: string) {}

	get length(): number {
		return this.data.length;
	}

	compare(leftIdx: number, rightIdx: number): boolean {
		return this.data[leftIdx].toLocaleLowerCase() > this.data[rightIdx].toLocaleLowerCase();
	}

	swap(leftIdx: number, rightIdx: number): void {
		const stringArray = this.data.split("");
		const temp = stringArray[leftIdx];
		stringArray[leftIdx] = stringArray[rightIdx];
		stringArray[rightIdx] = temp;
		this.data = stringArray.join("");
	}
}