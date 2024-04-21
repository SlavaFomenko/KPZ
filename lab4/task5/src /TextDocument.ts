export class TextDocument {
	private content: string

	constructor(content: string) {
		this.content = content
	}

	public getContent(): string {
		return this.content
	}

	public setContent(content: string): void {
		this.content = content
	}
}
