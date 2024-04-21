import { GeneralSupport } from './src/GeneralSupport'
import { Level1Support } from './src/Level1Support'
import { Level2Support } from './src/Level2Support'
import { Level3Support } from './src/Level3Support'

const supportChain = new Level1Support()
const level2 = new Level2Support()
const level3 = new Level3Support()
const general = new GeneralSupport()
supportChain
	.setNextHandler(level2)
	.setNextHandler(level3)
	.setNextHandler(general)

console.log('Вітаємо! Ласкаво просимо в систему підтримки.')
console.log('Будь ласка, опишіть вашу проблему:')

let request: string | null = null

do {
	const userInput = "проблема з комп'ютером";

	if (userInput !== null) {
		request = userInput.trim().toLowerCase()
		const response = supportChain.handleRequest(request)
		if (response) {
			console.log(response)
			break
		} else {
			console.log(
				'Не вдалося знайти відповідний рівень підтримки. Спробуйте ще раз.'
			)
		}
	} else {
		console.log('Скасовано користувачем.')
		break
	}
} while (request === null || request === '')
