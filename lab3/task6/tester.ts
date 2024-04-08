import * as fs from 'fs'
import { LightElementNode } from './src/LightElementNode'
import { LightTextNode } from './src/LightTextNode'
import { LightNode } from './src/lightNode'
import { CSSClasses } from './src/LightElementNode'
// type CSSClass = string[]

export class Tester {
	static splitText(text: string): string[] {
		return text.split('\n')
	}

	static createNode(line: string): LightNode {
    const textNode = new LightTextNode(line);
    let tagName = 'p';

    if (line.trim().length === 0) {
        tagName = 'p';
    } else if (line.trim().length < 20) {
        tagName = 'h2';
    } else if (line.startsWith(' ')) {
        tagName = 'blockquote';
    } 

    const emptyCSSClasses = CSSClasses.getInstance([]);

    return new LightElementNode(
        tagName,
        'block',
        'double',
        emptyCSSClasses,
        [textNode]
    );
}


	static readTextFromFile(filePath: string): string {
		return fs.readFileSync(filePath, 'utf-8')
	}
	static createBodyNode(nodes: LightNode[]): LightElementNode {
		const cssClasses = nodes
			.map(node => {
				if (node instanceof LightElementNode) {
					return node.cssClasses.classes
				}
				return []
			})
			.flat() 

		return new LightElementNode(
			'body',
			'block',
			'double',
			CSSClasses.getInstance(cssClasses),
			nodes
		)
	}

	static createHtmlNode(body: LightNode): LightElementNode {
		const cssClass = []
		if (body instanceof LightElementNode) {
			cssClass.push(...body.cssClasses.classes)
		}
		return new LightElementNode(
			'html',
			'block',
			'double',
			CSSClasses.getInstance(cssClass),
			[body]
		)
	}

	static exampleUsage(filePath: string): LightElementNode {
		const bookText = Tester.readTextFromFile(filePath)
		const lines = Tester.splitText(bookText)
		const nodes = lines.map(line => Tester.createNode(line))
		const body = Tester.createBodyNode(nodes)
		const html = Tester.createHtmlNode(body)
		return html
	}
}
