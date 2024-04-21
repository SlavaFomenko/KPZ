interface ImageLoadingStrategy {
	loadImage(src: string,altText:string): string
}
class FileImageLoadingStrategy implements ImageLoadingStrategy {
	loadImage(src: string,altText:string): string {
		return `<img src="file://${src}" alt="${altText}" />`
	}
}

class NetworkImageLoadingStrategy implements ImageLoadingStrategy {
	loadImage(src: string,altText:string): string {
		return `<img src="${src}" alt="${altText}" />`
	}
}

export {
	ImageLoadingStrategy,
	FileImageLoadingStrategy,
	NetworkImageLoadingStrategy,
}
