import { Food } from './Food'

export class Animal {
	constructor(
		public name: string,
		public species: string,
		public show: string,
		public hunger: number = 0
	) {}

	// Метод для виведення стану голоду тварини
	showHunger() {
		console.log(`${this.name} має рівень голоду: ${this.hunger}`)
	}

	demonstrateShow() {
		if (this.hunger < 10) {
			console.log(`${this.name} показав шоу: ${this.show}`)
			this.hunger++
		} else {
			console.log(`${this.name} не хоче нічого показувати (він голодний)`)
		}
	}

	// Метод для кормлення тварини конкретним кормом
	feed(food: Food): boolean {
		if (food.type === this.species) {
			if (this.hunger > 0) {
				this.hunger-- // Знижуємо рівень голоду, якщо корм підходить для цієї тварини
				console.log(`${this.name} було покормлено з ${food.name}.`)
				return true
			} else {
				console.log(`${this.name} не голодний!`)
				return false
			}
		} else {
			console.log(`Цей тип корму не підходить для ${this.species}!`)
			return false
		}
		// return false
	}
}