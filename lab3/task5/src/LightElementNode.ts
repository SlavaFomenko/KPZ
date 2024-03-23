import { LightNode } from './lightNode';

class LightElementNode extends LightNode {
    constructor(
        private tagName: string,
        private displayType: 'block' | 'inline',
        private closingType: 'single' | 'double',
        private cssClasses: string[],
        private children: LightNode[]
    ) {
        super();
    }

    render(): string {
    // console.log('hello');
    
        const attributes = this.cssClasses.length > 0 ? `class="${this.cssClasses.join(' ')}"` : '';
        const openingTag = `<${this.tagName} ${attributes}>`;
        const closingTag = this.closingType === 'single' ? '/' : `</${this.tagName}>`;
        const innerHTML = this.children.map(child => child.render()).join('');
        
        return `${openingTag}${innerHTML}${closingTag}`;
    }

    get outerHTML(): string {
        return this.render();
    }

    get innerHTML(): string {
        return this.children.map(child => child.render()).join('');
    }
}

export { LightElementNode };
