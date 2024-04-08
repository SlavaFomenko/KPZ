import { LightTextNode } from './src/LightTextNode'
import { LightElementNode } from './src/LightElementNode'

import { LightNode } from './src/lightNode'
import { Tester } from './tester'


const html = Tester.exampleUsage('book.txt');
// Обчислення розміру дерева в пам'яті
function calculateMemoryUsage(node: LightNode): number {
	let size = 0
	if (node instanceof LightElementNode) {
		size += node.tagName.length
		size += node.displayType.length
		size += node.closingType.length
		size += node.cssClasses.reduce((acc, cls) => acc + cls.length, 0)
		size += node.children.reduce(
			(acc, child) => acc + calculateMemoryUsage(child),
			0
		)
	} else if (node instanceof LightTextNode) {
		size += node.text.length
	}
	return size
}

const totalMemoryUsage = calculateMemoryUsage(html)
console.log('Total memory usage:', totalMemoryUsage, 'bytes')
console.log(html.outerHTML)
