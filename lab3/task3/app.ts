import { Circle,Square,Triangle } from './src/figures';
import { VectorRenderer, RasterRenderer } from './src/renders';

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const circle = new Circle(vectorRenderer);
const square = new Square(rasterRenderer);
const triangle = new Triangle(vectorRenderer);

circle.render();   
square.render(); 
triangle.render();
