import {LightTextNode} from './src/lightTextNode';
import { LightElementNode } from './src/lightElementNode'
import { EventObserver } from './src/eventObserver';

const listItem1 = new LightTextNode('Item 1')
const listItem2 = new LightTextNode('Item 2')
const list = new LightElementNode(
    'ul',
    'block',
    'double',
    ['my-list'],
    [listItem1, listItem2]
)

// Додавання EventListener
const clickObserver = new EventObserver('click', () => {
    console.log('List item clicked!');
});

list.addObserver(clickObserver);

console.log(list.outerHTML)
console.log(list.innerHTML)

list.notify('click');