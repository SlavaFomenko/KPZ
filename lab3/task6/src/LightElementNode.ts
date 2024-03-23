// lightElementNode.ts
import { LightNode } from './lightNode'
class LightElementNode extends LightNode {
    constructor(
        private _tagName: string,
        private _displayType: 'block' | 'inline',
        private _closingType: 'single' | 'double',
        private _cssClasses: string[],
        private _children: LightNode[]
    ) {
        super();
    }

    render(): string {
        const attributes = this._cssClasses.length > 0 ? `class="${this._cssClasses.join(' ')}"` : '';
        const openingTag = `<${this.tagName} ${attributes}>`;
        const closingTag = this._closingType === 'single' ? '/' : `</${this.tagName}>`;
        const innerHTML = this._children.map(child => child.render()).join('');
        
        return `${openingTag}${innerHTML}${closingTag}`;
    }

    get outerHTML(): string {
        return this.render();
    }

    get innerHTML(): string {
        return this._children.map(child => child.render()).join('');
    }

    get tagName(): string {
        return this._tagName;
    }

    get displayType(): 'block' | 'inline' {
        return this._displayType;
    }

    get closingType(): 'single' | 'double' {
        return this._closingType;
    }

    get cssClasses(): string[] {
        return this._cssClasses;
    }

    get children(): LightNode[] {
        return this._children;
    }
}

export { LightElementNode };
