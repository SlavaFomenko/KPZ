//Клас для тварин
import { Animal } from '../animals/Animal' 
// Клас для корму
import { Food } from '../animals/Food'
// Клас для підвидів тварин
import { Subspecies } from '../animals/Subspecies'
// Клас для працівників
import { Enclosure } from '../employees/Employee'
// Клас для вольєрів
import { Employee } from '../enclosures/Enclosure'

// Клас для зоопарку
export class Zoo {
	private animals: Animal[] = []
	private enclosures: Enclosure[] = []
	private foods: Food[] = []
	private employees: Employee[] = []

	constructor(public name: string) {}

	// Додати тварину до зоопарку
	addAnimal(animal: Animal) {
		this.animals.push(animal)
	}

	// Метод для кормлення тварини в зоопарку
	hasFood(foodName: string, foodType: string): boolean {
		return this.foods.some(
			food => food.name === foodName && food.type === foodType
		)
	}

	// Метод для кормлення тварини в зоопарку з перевіркою наявності корму
	feedAnimal(keeper: Employee, animalName: string, food: Food) {
		let foundAnimal: Animal | undefined

		for (let i = 0; i < this.animals.length; i++) {
			if (this.animals[i].name === animalName) {
				foundAnimal = this.animals[i]
				break
			}
		}
		if (foundAnimal) {
			if (this.hasFood(food.name, food.type)) {
				if (keeper.feedAnimal(foundAnimal, food)) {
					const index = this.foods.indexOf(food)
					if (index !== -1) {
						this.foods.splice(index, 1) // Видаляємо корм зі списку
					}
				}
			} else {
				console.log(`Корм ${food.name} відсутній на складі у зоопарку.`)
			}
		} else {
			console.log(`Тварина з ім'ям ${animalName} не знайдена в зоопарку.`)
		}
	}

	// Додати вольєр до зоопарку
	addEnclosure(enclosure: Enclosure) {
		this.enclosures.push(enclosure)
	}

	// Додати корм до зоопарку
	addFood(food: Food) {
		this.foods.push(food)
	}

	// Додати працівника до зоопарку
	addEmployee(employee: Employee) {
		this.employees.push(employee)
	}

	// Показати інвентаризацію зоопарку
	showInventory() {
		console.log(`Зоопарк: ${this.name}`)
		console.log(`Тварини: ${this.animals.length}`)
		console.log(`Вольєри: ${this.enclosures.length}`)
		console.log(`Корм: ${this.foods.length}`)
		console.log(`Працівники: ${this.employees.length}`)
	}

	//Додавання тварин у вольєри
	enclosureAddAnimal(enclosureId: number, animal: Animal) {
		// const enclosure = this.enclosures.find(enc => enc.id === enclosureId);  так не виходить ругається Property 'find' does not exist on type 'Enclosure[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2015' or later
		let enclosure: Enclosure | undefined
		for (let i = 0; i < this.enclosures.length; i++) {
			if (this.enclosures[i].id === enclosureId) {
				enclosure = this.enclosures[i]
				break
			}
		}
		if (enclosure) {
			if (enclosure.animals.length < enclosure.size) {
				enclosure.animals.push(animal)
				console.log(`${animal.name} було додано до вольєру ${enclosureId}.`)
			} else {
				console.log('Вольєр вже заповнений.')
			}
		} else {
			console.log(`Вольєр з id ${enclosureId} не знайдено.`)
		}
	}

	app() {
		const leo = new Subspecies('Лео', "М'ясоїдний", 'Тигр', 'Ричить')
		const umka = new Subspecies('Умка', "М'ясоїдний", 'Тигр', 'Ричить')

		const lemur = new Subspecies(
			'Джуліан',
			'Ссавець',
			'Лемур плямистий',
			'Танцює'
		)
		const lionEnclosure = new Enclosure(1, 3, 'Савана')
		const meat = new Food("М'ясо", "М'ясоїдний")
		const keeper = new Employee('Іван Петрович', 'Догляд за тваринами')

		lionEnclosure.animals = [leo,umka]
		this.addAnimal(leo)
		this.addAnimal(lemur)
		// this.addAnimal(leo)
		this.addEnclosure(lionEnclosure)
		this.addFood(meat)
		this.addEmployee(keeper)

		leo.showHunger()

		leo.demonstrateShow()
		
		leo.showHunger()
		
		this.feedAnimal(keeper, 'Лео', meat)
		umka.demonstrateShow()
		lionEnclosure.showAnimals()
	}
}
