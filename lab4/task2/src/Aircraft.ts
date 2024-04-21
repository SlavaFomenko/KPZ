export class Aircraft {
	public name: string
	public isTakingOff: boolean = false

	constructor(name: string) {
		this.name = name
	}

	public land(): void {
		console.log(`Aircraft ${this.name} is landing.`)
	}

	public takeOff(): void {
		console.log(`Aircraft ${this.name} is taking off.`)
	}
}
