import { LightTextNode } from './src/LightTextNode'
import { LightElementNode } from './src/LightElementNode'

const listItem1 = new LightTextNode('Item 1')
const listItem2 = new LightTextNode('Item 2')
const list = new LightElementNode(
	'ul',
	'block',
	'double',
	['my-list'],
	[listItem1, listItem2]
)

console.log(list.outerHTML)
console.log(list.innerHTML)
