import { LightElementNode } from './lightElementNode'
import { LightTextNode } from './lightTextNode'

export interface Visitor {
	visitTextNode(node: LightTextNode): void
	visitElementNode(node: LightElementNode): void
}

export class ConsoleVisitor implements Visitor {
	visitTextNode(node: LightTextNode): void {
		console.log('Visited Text Node:', node.render())
	}

	visitElementNode(node: LightElementNode): void {
		console.log('Visited Element Node:', node.tagName)
	}
}
