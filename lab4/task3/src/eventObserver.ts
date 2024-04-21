import { Observer } from './lightNode'

class EventObserver implements Observer {
	constructor(private event: string, private callback: () => void) {}

	update(event: string): void {
		if (event === this.event) {
			this.callback()
		}
	}
}

export { EventObserver }
