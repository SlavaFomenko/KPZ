import { InventoryItem } from './item'

export class InventoryDecorator extends InventoryItem {
	item: InventoryItem

	constructor(item: InventoryItem) {
		super(item.name)
		this.item = item
	}

	use(): void {
		this.item.use()
	}
}
