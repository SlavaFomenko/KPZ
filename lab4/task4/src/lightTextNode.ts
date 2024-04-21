import { LightNode } from './lightNode'

class LightTextNode extends LightNode {
	constructor(private text: string) {
		super()
	}

	render(): string {
		return this.text
	}
}

export { LightTextNode }
