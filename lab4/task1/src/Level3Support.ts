import { Support } from '../interfaces'
import { AbstractSupportHandler } from './AbstractSupportHandler'

export class Level3Support extends AbstractSupportHandler implements Support {
	public handleRequest(request: string): string | null {
		if (request === 'проблема з програмним забезпеченням') {
			return 'Level 3 підтримка: Перевстановіть програму або зверніться до відділу підтримки.'
		}
		return super.handleRequest(request)
	}
}
