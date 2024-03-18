import { InventoryDecorator } from './decorator'

export class Weapon extends InventoryDecorator {
	damage: number

	constructor(item: InventoryDecorator, damage: number) {
		super(item)
		this.damage = damage
	}

	use(): void {
		super.use()
		console.log(`Weapon equipped with ${this.damage} damage.`)
	}
}
