import { ImageLoadingStrategy } from './imageLoadingStrategy'
import { LightNode } from './lightNode'

export class ImageElementNode extends LightNode {
	render(): string {
		throw new Error('Method not implemented.')
	}
	private loadingStrategy: ImageLoadingStrategy

	constructor(
		private strategy: ImageLoadingStrategy,
		private src: string,
		private altText: string
	) {
		super()
		this.loadingStrategy = strategy
	}

	loadImage(): string {
		return this.loadingStrategy.loadImage(this.src,this.altText)
	}
}
