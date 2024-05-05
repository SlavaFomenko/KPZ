import { LightNode } from './lightNode'
import { StateContext } from './state'
import { Visitor } from './visitor'

export interface Iterator {
    hasNext(): boolean;
    next(): LightNode | null;
}

export class LightElementNode extends LightNode implements Iterator {
	private position: number = 0
	private stateContext: StateContext

	constructor(
		public tagName: string,
		private displayType: 'block' | 'inline',
		private closingType: 'single' | 'double',
		private cssClasses: string[],
		private children: LightNode[]
	) {
		super()
		this.stateContext = new StateContext(this)
	}

	render(): string {
		const attributes =
			this.cssClasses.length > 0 ? `class="${this.cssClasses.join(' ')}"` : ''
		const openingTag = `<${this.tagName} ${attributes}>`
		const closingTag =
			this.closingType === 'single' ? '/' : `</${this.tagName}>`
		const innerHTML = this.children.map(child => child.render()).join('')

		return `${openingTag}${innerHTML}${closingTag}`
	}

	get outerHTML(): string {
		return this.render()
	}

	get innerHTML(): string {
		return this.children.map(child => child.render()).join('')
	}

	// ітераторні методи
	hasNext(): boolean {
		return this.position < this.children.length
	}

	next(): LightNode | null {
		if (this.hasNext()) {
			const child = this.children[this.position]
			this.position++
			return child
		} else {
			return null
		}
	}

	getStateContext(): StateContext {
		return this.stateContext
	}

	// Хук життєвого циклу - OnCreated
	onCreated() {
		console.log('Element Created:', this.tagName)
	}

	// Хук життєвого циклу - OnInserted
	onInserted() {
		console.log('Element Inserted:', this.tagName)
	}

	// Хук життєвого циклу - OnClassListApplied
	onClassListApplied() {
		console.log('Class List Applied:', this.cssClasses)
	}

	// Хук життєвого циклу - OnStylesApplied
	onStylesApplied() {
		console.log('Styles Applied:', this.displayType)
	}

	// Метод прийняття відвідувача
	accept(visitor: Visitor) {
		visitor.visitElementNode(this)
		this.children.forEach(child => child.accept(visitor))
	}
}
