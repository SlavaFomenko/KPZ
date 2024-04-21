import { Mediator } from './Mediator'

export class BaseComponent {
	public mediator?: Mediator

	protected notifyMediator(ev: string): void {
		if (this.mediator) {
			this.mediator.notify(ev)
		}
	}
}
