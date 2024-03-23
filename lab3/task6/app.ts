import { LightTextNode } from './src/LightTextNode'
import { LightElementNode } from './src/LightElementNode'
import * as fs from 'fs'
import { LightNode } from './src/lightNode'


// Функція для розділення тексту на рядки з врахуванням правил
function splitText(text: string): string[] {
	return text.split('\n')
}

// Функція для створення відповідного елемента в залежності від рядка тексту
function createNode(line: string): LightNode {
	if (line.trim().length === 0) {
		return new LightElementNode(
			'p',
			'block',
			'double',
			[],
			[new LightTextNode(line)]
		)
	} else if (line.trim().length < 20) {
		return new LightElementNode(
			'h2',
			'block',
			'double',
			[],
			[new LightTextNode(line)]
		)
	} else if (line.startsWith(' ')) {
		return new LightElementNode(
			'blockquote',
			'block',
			'double',
			[],
			[new LightTextNode(line)]
		)
	} else {
		return new LightElementNode(
			'p',
			'block',
			'double',
			[],
			[new LightTextNode(line)]
		)
	}
}

// Зчитуємо текст з файлу
const bookText = fs.readFileSync('book.txt', 'utf-8')

// Розділення тексту на рядки
const lines = splitText(bookText)

// Створення відповідних елементів
const nodes = lines.map(line => createNode(line))

// Обгортка у елемент <body>
const body = new LightElementNode('body', 'block', 'double', [], nodes)

// Обгортка у елемент <html>
const html = new LightElementNode('html', 'block', 'double', [], [body])

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
