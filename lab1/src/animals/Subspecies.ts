import { Animal } from './Animal'

export class Subspecies extends Animal {
	constructor(
		public name: string,
		public species: string,
		public subspecies: string,
		public show: string,
		public hunger: number = 0
	) {
		super(name, species, show, hunger)
	}
}