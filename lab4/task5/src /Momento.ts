import { TextDocument } from './TextDocument'

export class Momento {
	private state: string

	constructor(state: string) {
		this.state = state
	}

	public getState(): string {
		return this.state
	}
}
