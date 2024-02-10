

// Single Responsibility Principle - SRP
// Принцип єдиної відповідальності
class FileManager {
  saveFile(fileName: string, data: string): void {
    // Імплементація збереження файлу
  }

  loadFile(fileName: string): string {
    // Імплементація завантаження файлу
    return "";
  }
}

class DataProcessor {
  processData(data: string): string {
    // Імплементація обробки даних
    return "";
  }
}


// Принцип відкритості/закритості (Open/Closed Principle - OCP):
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  totalArea(shapes: Shape[]): number {
    let total = 0;
    for (const shape of shapes) {
      total += shape.area();
    }
    return total;
  }
}


// Принцип підстановки Барбари Лісков (Liskov Substitution Principle - LSP):
class Bird {
  fly(): void {
    console.log("Політ...");
  }
}

class Duck extends Bird {
  swim(): void {
    console.log("Плавання...");
  }
}

function makeBirdFly(bird: Bird): void {
  bird.fly();
}

const duck = new Duck();
makeBirdFly(duck);



// Принцип розділення інтерфейсу (Interface Segregation Principle - ISP):
interface Worker {
  work(): void;
  eat(): void;
}

class Human implements Worker {
  work(): void {
    console.log("Робота...");
  }
  eat(): void {
    console.log("Їжа...");
  }
}

class Robot implements Worker {
  work(): void {
    console.log("Робота...");
  }
  // Немає потреби у методі eat()
}


// Принцип інверсії залежностей (Dependency Inversion Principle - DIP):
interface MessageSender {
  sendMessage(message: string): void;
}

class EmailSender implements MessageSender {
  sendMessage(message: string): void {
    console.log(`Відправка електронної пошти: ${message}`);
  }
}

class SMSManager implements MessageSender {
  sendMessage(message: string): void {
    console.log(`Відправка SMS: ${message}`);
  }
}

class NotificationService {
  constructor(private sender: MessageSender) {}

  sendNotification(message: string): void {
    this.sender.sendMessage(message);
  }
}

const emailSender = new EmailSender();
const smsManager = new SMSManager();

const emailNotificationService = new NotificationService(emailSender);
const smsNotificationService = new NotificationService(smsManager);

emailNotificationService.sendNotification("Привіт, це повідомлення електронної пошти!");
smsNotificationService.sendNotification("Привіт, це SMS повідомлення!");




// -------------------------------------------------------------------
// DRY (Don't Repeat Yourself):
function calculateCircleProperties(radius: number): { area: number; perimeter: number } {
  const area = Math.PI * radius ** 2;
  const perimeter = 2 * Math.PI * radius;
  return { area, perimeter };
}

// KISS (Keep It Simple, Stupid):
function isEvenNumberSimple(num: number): boolean {
  return num % 2 === 0;
}

// YAGNI (You Aren't Gonna Need It):
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Composition Over Inheritance:

class Animal {
  private sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }

  speak(): void {
    console.log(`Animal makes a ${this.sound}`);
  }
}

const animal = new Animal("sound");
animal.speak(); // Виведе: Animal makes a sound

const dogSound = new Animal("bark");
dogSound.speak();

// Program to Interfaces not Implementations:
interface Saver {
  save(data: any): void;
}

class Database implements Saver {
  save(data: any): void {
    // логіка збереження в базу даних
  }
}

// Fail Fast:
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

