import { Component1 } from './Component1'
import { Component2 } from './Component2'

export class Mediator {
	private component1: Component1
	private component2: Component2

	constructor(component1: Component1, component2: Component2) {
		this.component1 = component1
		this.component1.mediator = this
		this.component2 = component2
		this.component2.mediator = this
	}

	public notify(ev: string): void {
		if (ev === 'Event A') {
			console.log('Mediator reacts on A and triggers following operation:')
			this.component2.methodC()
		}
		if (ev === 'Event D') {
			console.log('Mediator reacts on D and triggers following operations:')
			this.component1.methodB()
			this.component2.methodC()
		}
	}
}
