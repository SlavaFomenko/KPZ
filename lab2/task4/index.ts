class Virus {
	weight: number;
	age: number;
	name: string;
	species: string;
	children: Virus[];

	constructor(weight: number, age: number, name: string, species: string, children: Virus[] = []) {
			this.weight = weight;
			this.age = age;
			this.name = name;
			this.species = species;
			this.children = children;
	}

	clone(): Virus {
			const clonedChildren: Virus[] = this.children.map(child => child.clone());
			return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
	}
	toString():void{
		console.log(`Name ${this.name}`);
	}
}

// Створення вірусів
const grandchild1 = new Virus(0.1, 1, "Grandchild 1", "Coronavirus");
const grandchild2 = new Virus(0.2, 1, "Grandchild 2", "Coronavirus");
const child1 = new Virus(0.5, 2, "Child 1", "Coronavirus", [grandchild1, grandchild2]);
const child2 = new Virus(0.6, 2, "Child 2", "Coronavirus");
const parentVirus = new Virus(1.2, 5, "Parent", "Coronavirus", [child1, child2]);

// Клонування вірусів
const clonedParent = parentVirus.clone();

// Перевірка результатів
console.dir(clonedParent);

console.log('children');
clonedParent.children.forEach(virus=>{
	virus.toString()
})
