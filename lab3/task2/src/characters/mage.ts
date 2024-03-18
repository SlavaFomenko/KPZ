
import { Hero } from './hero'
import { InventoryItem } from '../inventory/item'
export class Mage extends Hero {
	constructor(name: string, inventory: InventoryItem[]) {
		super(name, inventory)
	}
}
