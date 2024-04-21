import { ImageElementNode } from './src/ImageElementNode'
import { FileImageLoadingStrategy, NetworkImageLoadingStrategy } from './src/imageLoadingStrategy'


const fileSystemStrategy = new FileImageLoadingStrategy();
const networkStrategy = new NetworkImageLoadingStrategy();

const fileImage = new ImageElementNode(fileSystemStrategy, '/path/to/image.png', 'File Image');
const networkImage = new ImageElementNode(networkStrategy, 'http://example.com/image.jpg', 'Network Image');

console.log(fileImage.loadImage());
console.log(networkImage.loadImage());
