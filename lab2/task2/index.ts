// Абстрактні класи для продуктів
abstract class Laptop {
	abstract display(): void;
}

abstract class Netbook {
	abstract display(): void;
}

abstract class EBook {
	abstract display(): void;
}

abstract class Smartphone {
	abstract display(): void;
}

// Абстрактні фабрики
abstract class TechFactory {
	abstract createLaptop(): Laptop;
	abstract createNetbook(): Netbook;
	abstract createEBook(): EBook;
	abstract createSmartphone(): Smartphone;
}

// Фабрика для бренду IProne
class IProneFactory extends TechFactory {
	createLaptop(): Laptop {
			return new IProneLaptop();
	}

	createNetbook(): Netbook {
			return new IProneNetbook();
	}

	createEBook(): EBook {
			return new IProneEBook();
	}

	createSmartphone(): Smartphone {
			return new IProneSmartphone();
	}
}

// Фабрика для бренду Kiaomi
class KiaomiFactory extends TechFactory {
	createLaptop(): Laptop {
			return new KiaomiLaptop();
	}

	createNetbook(): Netbook {
			return new KiaomiNetbook();
	}

	createEBook(): EBook {
			return new KiaomiEBook();
	}

	createSmartphone(): Smartphone {
			return new KiaomiSmartphone();
	}
}

// Фабрика для бренду Balaxy
class BalaxyFactory extends TechFactory {
	createLaptop(): Laptop {
			return new BalaxyLaptop();
	}

	createNetbook(): Netbook {
			return new BalaxyNetbook();
	}

	createEBook(): EBook {
			return new BalaxyEBook();
	}

	createSmartphone(): Smartphone {
			return new BalaxySmartphone();
	}
}

// Конкретні класи продуктів для бренду IProne
class IProneLaptop extends Laptop {
	display() {
			console.log("IProne Laptop");
	}
}

class IProneNetbook extends Netbook {
	display() {
			console.log("IProne Netbook");
	}
}

class IProneEBook extends EBook {
	display() {
			console.log("IProne EBook");
	}
}

class IProneSmartphone extends Smartphone {
	display() {
			console.log("IProne Smartphone");
	}
}

// Конкретні класи продуктів для бренду Kiaomi
class KiaomiLaptop extends Laptop {
	display() {
			console.log("Kiaomi Laptop");
	}
}

class KiaomiNetbook extends Netbook {
	display() {
			console.log("Kiaomi Netbook");
	}
}

class KiaomiEBook extends EBook {
	display() {
			console.log("Kiaomi EBook");
	}
}

class KiaomiSmartphone extends Smartphone {
	display() {
			console.log("Kiaomi Smartphone");
	}
}

// Конкретні класи продуктів для бренду Balaxy
class BalaxyLaptop extends Laptop {
	display() {
			console.log("Balaxy Laptop");
	}
}

class BalaxyNetbook extends Netbook {
	display() {
			console.log("Balaxy Netbook");
	}
}

class BalaxyEBook extends EBook {
	display() {
			console.log("Balaxy EBook");
	}
}

class BalaxySmartphone extends Smartphone {
	display() {
			console.log("Balaxy Smartphone");
	}
}

// Головний метод програми
function main() {
	const iproneFactory: TechFactory = new IProneFactory();
	const kiaomiFactory: TechFactory = new KiaomiFactory();
	const balaxyFactory: TechFactory = new BalaxyFactory();

	// Створення продуктів для бренду IProne
	const iproneLaptop: Laptop = iproneFactory.createLaptop();
	iproneLaptop.display();
	const iproneNetbook: Netbook = iproneFactory.createNetbook();
	iproneNetbook.display();
	const iproneEBook: EBook = iproneFactory.createEBook();
	iproneEBook.display();
	const iproneSmartphone: Smartphone = iproneFactory.createSmartphone();
	iproneSmartphone.display();

	// Створення продуктів для бренду Kiaomi
	const kiaomiLaptop: Laptop = kiaomiFactory.createLaptop();
	kiaomiLaptop.display();
	const kiaomiNetbook: Netbook = kiaomiFactory.createNetbook();
	kiaomiNetbook.display();
	const kiaomiEBook: EBook = kiaomiFactory.createEBook();
	kiaomiEBook.display();
	const kiaomiSmartphone: Smartphone = kiaomiFactory.createSmartphone();
	kiaomiSmartphone.display();

	// Створення продуктів для бренду Balaxy
	const balaxyLaptop: Laptop = balaxyFactory.createLaptop();
	balaxyLaptop.display();
	const balaxyNetbook: Netbook = balaxyFactory.createNetbook();
	balaxyNetbook.display();
	const balaxyEBook: EBook = balaxyFactory.createEBook();
	balaxyEBook.display();
	const balaxySmartphone: Smartphone = balaxyFactory.createSmartphone();
	balaxySmartphone.display();
}

main();
