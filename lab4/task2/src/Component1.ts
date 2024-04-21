import { BaseComponent } from './BaseComponent'

export class Component1 extends BaseComponent {
  public methodA(): void {
    console.log("Component 1 does A.");
    this.notifyMediator("Event A");
  }

  public methodB(): void {
    console.log("Component 1 does B.");
    this.notifyMediator("Event B");
  }
}