import {Renderer} from './shape'


export class VectorRenderer implements Renderer {
	renderShape(shape: string): void {
		console.log(`Drawing ${shape} as vector graphics.`)
	}
}

export class RasterRenderer implements Renderer {
	renderShape(shape: string): void {
		console.log(`Drawing ${shape} as pixels.`)
	}
}
