import { ISortable } from "./Sorter";
import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter{
	constructor(public data: string) {
		super();
	}

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