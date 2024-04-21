interface Observer {
	update(event: string): void
}

abstract class LightNode {
	private observers: Observer[] = []

	abstract render(): string

	addObserver(observer: Observer) {
		this.observers.push(observer)
	}

	removeObserver(observer: Observer) {
		const index = this.observers.indexOf(observer)
		if (index !== -1) {
			this.observers.splice(index, 1)
		}
	}

	notify(event: string) {
		this.observers.forEach(observer => {
			observer.update(event)
		})
	}
}

export { LightNode, Observer }
