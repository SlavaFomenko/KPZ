import { LightNode } from './lightNode';
import { StateContext } from './state'
import { Visitor } from './visitor';

export class LightTextNode extends LightNode {
    private stateContext: StateContext;

    constructor(private text: string) {
        super();
        this.stateContext = new StateContext(this);
    }

    render(): string {
        return this.text;
    }

    getStateContext(): StateContext {
        return this.stateContext;
    }

    // Хук життєвого циклу - OnTextRendered
    onTextRendered() {
        console.log('Text Rendered:', this.text);
    }

    // Метод прийняття відвідувача
    accept(visitor: Visitor) {
        visitor.visitTextNode(this);
    }
}
