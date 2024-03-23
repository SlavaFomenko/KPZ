import { Shape, Renderer } from './shape'
export class Circle extends Shape {
	constructor(renderer: Renderer) {
		super(renderer, 'Circle')
	}
}

export class Square extends Shape {
	constructor(renderer: Renderer) {
		super(renderer, 'Square')
	}
}

export class Triangle extends Shape {
	constructor(renderer: Renderer) {
		super(renderer, 'Triangle')
	}
}
