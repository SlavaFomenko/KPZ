import { BaseComponent } from './BaseComponent'

export class Component2 extends BaseComponent {
	public methodC(): void {
		console.log('Component 2 does C.')
		this.notifyMediator('Event C')
	}

	public methodD(): void {
		console.log('Component 2 does D.')
		this.notifyMediator('Event D')
	}
}
