import { LightTextNode } from './src/lightTextNode';
import { LightElementNode, Iterator } from './src/lightElementNode';
import { EventObserver } from './src/observer';
import { ClickCommand } from './src/command';
import { HoverState } from './src/state';
import { Visitor, ConsoleVisitor } from './src/visitor';

const listItem1 = new LightTextNode('Item 1');
const listItem2 = new LightTextNode('Item 2');
const list = new LightElementNode(
    'ul',
    'block',
    'double',
    ['my-list'],
    [listItem1, listItem2]
);

// хук життєвого циклу - OnCreated
list.onCreated();

// команда
const clickCommand = new ClickCommand('List item clicked!');

const clickObserver = new EventObserver('click', clickCommand);

list.addObserver(clickObserver);

console.log(list.outerHTML);
console.log(list.innerHTML);

list.notify('click');

// ітератор
const iterator: Iterator = list;
while (iterator.hasNext()) {
    const child = iterator.next();
    if (child instanceof LightTextNode) {
        console.log('Text Node:', child.render());
        child.onTextRendered();
    } else if (child instanceof LightElementNode) {
        console.log('Element Node:', child.render());
        child.onInserted();
        child.onClassListApplied();
        child.onStylesApplied();
    }
}

list.onRemoved();
//стан
listItem1.getStateContext().setState(new HoverState(listItem1));
listItem1.getStateContext().request();

// Відвідувач
const visitor: Visitor = new ConsoleVisitor();
list.accept(visitor);

