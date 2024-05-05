import { Observer } from './observer'
import { Command } from './command'

export class EventObserver implements Observer {
	constructor(private event: string, private command: Command) {}

	update(event: string): void {
		if (event === this.event) {
			this.command.execute()
		}
	}
}
