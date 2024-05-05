import { Command } from './command'

export interface Observer {
	update(event: string): void
}

export class EventObserver implements Observer {
	constructor(private event: string, private command: Command) {}

	update(event: string): void {
		if (event === this.event) {
			this.command.execute()
		}
	}
}
