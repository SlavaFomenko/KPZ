
import { LightNode } from './lightNode';

class LightTextNode extends LightNode {
    constructor(private _text: string) {
        super();
    }

    render(): string {
        return this._text;
    }
    
    get text(): string {
        return this._text;
    }
}

export { LightTextNode };
