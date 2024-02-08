// 1. Створіть систему класів для обліку зоопарку.
// Ви можете
// створювати класи для різних видів і підвидів тварин;
// для вольєрів
// різних розмірів і типів;
// корму для тварин;
// працівників зоопарку.

// 2. Створіть класи інвентаризації, для виведення на екран
// інформації про наявних тварин, кількості співробітників тощо.

// Клас для тварин
class Animal {
	constructor(public name: string, public species: string) {}
}

// Клас для підвидів тварин
class Subspecies extends Animal {
	constructor(
		public name: string,
		public species: string,
		public subspecies: string
	) {
		super(name, species)
	}
}

// Клас для вольєрів
class Enclosure {
	constructor(public id: number, public size: string, public type: string) {}
}

// Клас для корму
class Food {
	constructor(public name: string, public type: string) {}
}

// Клас для працівників
class Employee {
	constructor(public name: string, public position: string) {}
}

// Клас для зоопарку
class Zoo {
	private animals: Animal[] = []
	private enclosures: Enclosure[] = []
	private foods: Food[] = []
	private employees: Employee[] = []

	constructor(public name: string) {}

	// Додати тварину до зоопарку
	addAnimal(animal: Animal) {
		this.animals.push(animal)
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
}

// Приклад використання
const zoo = new Zoo('Центральний зоопарк')
const lion = new Animal('Лев', 'Ссавець')
const africanLion = new Subspecies("Африканський лев", "Ссавець", "Пантера лео");
const lionEnclosure = new Enclosure(1, 'Великий', 'Савана')
const meat = new Food("М'ясо", "М'ясоїдний")
const keeper = new Employee('Іван Петрович', 'Догляд за тваринами')

zoo.addAnimal(lion)
zoo.addAnimal(africanLion);
zoo.addEnclosure(lionEnclosure)
zoo.addFood(meat)
zoo.addEmployee(keeper)

zoo.showInventory()
