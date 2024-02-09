import { Animal } from '../animals/Animal'

export class Enclosure {
	private _animals: Animal[] = []

	constructor(
		public id: number,
		public size: number,
		public type: string,
		animals?: Animal[]
	) {
		if (animals) {
			animals.forEach(animal => this._animals.push(animal))
		}
	}

	get animals(): Animal[] {
		return this._animals
	}

	set animals(animals: Animal[]) {
		if (this.animals.length <= this.size) {
			this._animals = animals
		} else {
			console.log('Вольєр вже заповненний')
		}
	}

	showAnimals = () => {
		console.log(`В вольєрі ${this.id} знаходяться такі тварини.`)
		this.animals.forEach((animal, i) => {
			console.log(`${i + 1}. ${animal.name} голодний на ${animal.hunger}`)
		})
	}
}