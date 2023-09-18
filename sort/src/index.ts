class Sorter {
	collection: number[];

	constructor(collection: number[]) {
		this.collection = collection;
	}

	sort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection[j] > this.collection[j+1]) {
					// swap left and right values if left > right
					const leftHand = this.collection[j];
					this.collection[j] = this.collection[j+1];
					this.collection[j+1] = leftHand;
				}
			}  
		}
	}
}

const array = [1,-5,10,4,2];
const sorter = new Sorter(array);
sorter.sort();
console.log(sorter.collection);