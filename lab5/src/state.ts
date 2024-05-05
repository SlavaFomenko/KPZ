import { LightNode } from './lightNode'

export interface State {
	handle(): void
}

export class NormalState implements State {
	constructor(private node: LightNode) {}

	handle(): void {
		console.log('Normal State')
	}
}

export class HoverState implements State {
	constructor(private node: LightNode) {}

	handle(): void {
		console.log('Hover State')
	}
}

export class StateContext {
	private state: State = new NormalState(this.node)

	constructor(private node: LightNode) {}

	setState(state: State): void {
		this.state = state
	}

	getState(): State {
		return this.state
	}

	request(): void {
		this.state.handle()
	}
}
