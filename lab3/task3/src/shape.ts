export interface Renderer {
	renderShape(shape: string): void
}

export class Shape {
	constructor(private renderer: Renderer, private shapeName: string) {}
	render(): void {
		this.renderer.renderShape(this.shapeName)
	}
}
