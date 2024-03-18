import { Warrior } from './src/characters/Warrior'
import { Mage } from './src/characters/mage'
import { Palladin } from './src/characters/palladin'
import { Armor } from './src/inventory/armor'
import { InventoryDecorator } from './src/inventory/decorator'
import { InventoryItem } from './src/inventory/item'
import { Weapon } from './src/inventory/weapon'

const armor = new Armor(
	new InventoryDecorator(new InventoryItem('Steel Armor')),
	10
)
const dagger = new Weapon(
	new InventoryDecorator(new InventoryItem('Dagger')),
	15
)
const katana = new Weapon(
	new InventoryDecorator(new InventoryItem('Katana')),
	20
)

const hero1 = new Warrior('Warrior1', [])
const hero2 = new Mage('Mage1', [])
const hero3 = new Palladin('Palladin1', [katana])

hero1.inventory = [armor, dagger]
hero2.inventory = [armor]
hero3.addItemToInventory(armor)
hero3.addItemToInventory(dagger)

hero1.inventory.forEach(item => item.use());
hero2.inventory.forEach(item => item.use());
hero3.inventory.forEach(item => item.use())
