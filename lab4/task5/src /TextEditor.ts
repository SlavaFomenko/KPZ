import { TextDocument } from './TextDocument'
import { Momento } from './Momento'

export class TextEditor {
	private document: TextDocument
	private history: Momento[]

	constructor(content: string) {
		this.document = new TextDocument(content)
		this.history = []
	}

	public getContent(): string {
		return this.document.getContent()
	}

	public setContent(content: string): void {
		const momento = new Momento(this.document.getContent())
		this.history.push(momento)
		this.document.setContent(content)
	}

	public undo(): void {
		if (this.history.length > 0) {
			const lastMomento = this.history.pop()
			if (lastMomento) {
				this.document.setContent(lastMomento.getState())
			}
		} else {
			console.log('Nothing to undo')
		}
	}
}
