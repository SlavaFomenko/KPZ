import { SupportHandler } from '../interfaces'

export abstract class AbstractSupportHandler implements SupportHandler {
	private nextHandler: SupportHandler | null = null

	public setNextHandler(handler: SupportHandler): SupportHandler {
		this.nextHandler = handler
		return handler
	}

	public handleRequest(request: string): string | null {
		if (this.nextHandler) {
			return this.nextHandler.handleRequest(request)
		}
		return null
	}
}
