import { Support } from '../interfaces'
import { AbstractSupportHandler } from './AbstractSupportHandler'

export class Level1Support extends AbstractSupportHandler implements Support {
	public handleRequest(request: string): string | null {
		if (request === 'проблема з підключенням до мережі') {
			return 'Level 1 підтримка: Перевірте свій кабель та перезавантажте маршрутизатор.'
		}
		return super.handleRequest(request)
	}
}
