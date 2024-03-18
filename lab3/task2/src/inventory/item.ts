export class InventoryItem {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  use(): void {
    console.log(`${this.name} has been used.`);
  }
}
