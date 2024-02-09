import { Animal } from '../animals/Animal'
import { Food } from '../animals/Food'

export class Employee {
	constructor(public name: string, public position: string) {}

	feedAnimal(animal: Animal, food: Food): boolean {
		// Перевірка, чи корм підходить для виду тварини
		if (food.type === animal.species) {
			// Кормлення тварини
			if (animal.feed(food)) {
				console.log(
					`${this.name} покормив тварину ${animal.name} з ${food.name}.`
				)
				return true
			} else {
				console.log(`${this.name}, тварина ${animal.name} не голодна!`)
				return false
			}
		} else {
			console.log(
				`${this.name}, цей тип корму не підходить для тварини ${animal.species}.`
			)
			return false
		}
	}
}