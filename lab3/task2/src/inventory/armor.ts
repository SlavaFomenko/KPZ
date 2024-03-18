import { InventoryDecorator } from './decorator'

export class Armor extends InventoryDecorator {
	defense: number

	constructor(item: InventoryDecorator, defense: number) {
		super(item)
		this.defense = defense
	}

	use(): void {
		super.use()
		console.log(`Armor equipped with ${this.defense} defense.`)
	}
}
