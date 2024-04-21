import { Aircraft } from './src/Aircraft'
import { CommandCentre } from './src/CommandCentre'
import { Component1 } from './src/Component1'
import { Component2 } from './src/Component2'
import { Mediator } from './src/Mediator'
import { Runway } from './src/Runway'

const runway1 = new Runway();
const runway2 = new Runway();
const runways = [runway1, runway2];

const aircraft1 = new Aircraft("Boeing 747");
const aircraft2 = new Aircraft("Airbus A380");
const aircrafts = [aircraft1, aircraft2];

const commandCentre = new CommandCentre(runways, aircrafts);

const component1 = new Component1();
const component2 = new Component2();
const mediator = new Mediator(component1, component2);

component1.methodA();
component2.methodD();