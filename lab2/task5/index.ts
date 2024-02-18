// клас що представляє героя
class Hero {
	constructor(
		public height: number,
		public buildType: string,
		public hairColor: string,
		public eyeColor: string,
		public clothes: string,
		public inventory: string[]
	) {}
}

// клас що представляє ворога
class Enemy {
	constructor(public evilDeeds: string[]) {}
}

// базовий інтерфейс для білдера
interface CharacterBuilder {
	setHeight(height: number): CharacterBuilder
	setBuild(build: string): CharacterBuilder
	setHairColor(color: string): CharacterBuilder
	setEyeColor(color: string): CharacterBuilder
	setClothes(clothes: string): CharacterBuilder
	setInventory(inventory: string[]): CharacterBuilder
	construct(): Hero | Enemy
}

// білдер для створення героя
class HeroBuilder implements CharacterBuilder {
	private height: number = 0
	private buildType: string = ''
	private hairColor: string = ''
	private eyeColor: string = ''
	private clothes: string = ''
	private inventory: string[] = []

	setHeight(height: number): CharacterBuilder {
		this.height = height
		return this
	}

	setBuild(build: string): CharacterBuilder {
		this.buildType = build
		return this
	}

	setHairColor(color: string): CharacterBuilder {
		this.hairColor = color
		return this
	}

	setEyeColor(color: string): CharacterBuilder {
		this.eyeColor = color
		return this
	}

	setClothes(clothes: string): CharacterBuilder {
		this.clothes = clothes
		return this
	}

	setInventory(inventory: string[]): CharacterBuilder {
		this.inventory = inventory
		return this
	}

	construct(): Hero {
		return new Hero(
			this.height,
			this.buildType,
			this.hairColor,
			this.eyeColor,
			this.clothes,
			this.inventory
		)
	}
}

//білдер для створення ворога
class EnemyBuilder implements CharacterBuilder {
	private evilDeeds: string[] = []

	setHeight(height: number): CharacterBuilder {
		return this
	}

	setBuild(build: string): CharacterBuilder {
		return this
	}

	setHairColor(color: string): CharacterBuilder {
		return this
	}

	setEyeColor(color: string): CharacterBuilder {
		return this
	}

	setClothes(clothes: string): CharacterBuilder {
		return this
	}

	setInventory(inventory: string[]): CharacterBuilder {
		return this
	}

	addEvilDeed(deed: string): EnemyBuilder {
		this.evilDeeds.push(deed)
		return this
	}

	construct(): Enemy {
		return new Enemy(this.evilDeeds)
	}
}

// директор який керує процесом створення персонажів
class CharacterDirector {
	constructor(private builder: CharacterBuilder) {}

	constructCharacter(): any { // знаю що any погано )
		return this.builder.construct()
	}
}

const heroBuilder = new HeroBuilder()
const enemyBuilder = new EnemyBuilder()

const hero = new CharacterDirector(
	heroBuilder
		.setHeight(180)
		.setBuild('athletic')
		.setHairColor('blonde')
		.setEyeColor('blue')
		.setClothes('armor')
		.setInventory(['sword', 'shield'])
).constructCharacter()

const enemy = new CharacterDirector(
	enemyBuilder
		.addEvilDeed('burned down a village')
		.addEvilDeed('stole from the poor')
).constructCharacter()

console.log(hero)
console.log(enemy)
