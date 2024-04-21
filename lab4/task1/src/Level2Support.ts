import { Support } from '../interfaces'
import { AbstractSupportHandler } from './AbstractSupportHandler'

export class Level2Support extends AbstractSupportHandler implements Support {
	public handleRequest(request: string): string | null {
		if (request === "проблема з комп'ютером") {
			return "Level 2 підтримка: Перевірте, чи всі кабелі підключені, і перезавантажте комп'ютер."
		}
		return super.handleRequest(request)
	}
}
