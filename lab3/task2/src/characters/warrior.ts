
import { Hero } from './hero'
import { InventoryItem } from '../inventory/item'
export class Warrior extends Hero {
	constructor(name: string, inventory: InventoryItem[]) {
		super(name, inventory)
	}
}
