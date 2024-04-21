import { TextEditor } from './src /TextEditor';


const editor = new TextEditor("Початковий текст документу");

console.log("Початковий зміст документу:", editor.getContent());

editor.setContent("Новий зміст документу");
console.log("Після зміни змісту документу:", editor.getContent());

editor.undo();
console.log("Після скасування зміни:", editor.getContent());
