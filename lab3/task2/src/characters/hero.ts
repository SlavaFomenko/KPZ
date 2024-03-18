// src/characters/Hero.ts
import { InventoryItem } from '../inventory/item'

export class Hero {
	constructor(public name: string, public inventory: InventoryItem[] = []) {}

	addItemToInventory(item: InventoryItem): void {
		this.inventory.push(item)
	}

	removeItemFromInventory(item: InventoryItem): void {
		const index = this.inventory.indexOf(item)
		if (index !== -1) {
			this.inventory.splice(index, 1)
		}
	}
}
