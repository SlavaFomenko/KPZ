// lightElementNode.ts
import { LightNode } from './lightNode'

// Класс для хранения информации о классах CSS
class CSSClasses {
	[x: string]: any
	private static classesMap: { [key: string]: CSSClasses } = {}

	private constructor(private _classes: string[]) {}

	// Создание или получение экземпляра класса CSSClasses
	static getInstance(classes: string[]): CSSClasses {
		const key = classes.join(' ')
		if (!CSSClasses.classesMap[key]) {
			CSSClasses.classesMap[key] = new CSSClasses(classes)
		}
		return CSSClasses.classesMap[key]
	}

	get classes(): string[] {
		return this._classes
	}
}

class LightElementNode extends LightNode {
	constructor(
		private _tagName: string,
		private _displayType: 'block' | 'inline',
		private _closingType: 'single' | 'double',
		private _cssClasses: CSSClasses,
		private _children: LightNode[]
	) {
		super()
	}

	render(): string {
		const attributes =
			this._cssClasses.classes.length > 0
				? `class="${this._cssClasses.classes.join(' ')}"`
				: ''
		const openingTag = `<${this.tagName} ${attributes}>`
		const closingTag =
			this._closingType === 'single' ? '/' : `</${this.tagName}>`
		const innerHTML = this.innerHTML

		return `${openingTag}${innerHTML}${closingTag}`
	}

	get outerHTML(): string {
		return this.render()
	}

	get innerHTML(): string {
		return this._children.map(child => child.render()).join('')
	}

	get tagName(): string {
		return this._tagName
	}

	get displayType(): 'block' | 'inline' {
		return this._displayType
	}

	get closingType(): 'single' | 'double' {
		return this._closingType
	}

	get cssClasses(): CSSClasses {
		return this._cssClasses
	}

	get children(): LightNode[] {
		return this._children
	}
}

export { LightElementNode,CSSClasses }
