import { Observer } from './observer'
import { Visitor } from './visitor'

export abstract class LightNode {
    accept(visitor: Visitor): void {
        throw new Error('Method not implemented.')
    }
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

	// Хук життєвого циклу - OnRemoved
	onRemoved() {
		console.log('Node Removed:', this.render())
	}
}
