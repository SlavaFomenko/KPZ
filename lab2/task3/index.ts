class Authenticator {
	private static instance: Authenticator | null = null

	private constructor() {
		// приватний конструктор, щоб заборонити зовнішній доступ
	}

	public static getInstance(): Authenticator {
		if (!Authenticator.instance) {
			Authenticator.instance = new Authenticator()
		}
		return Authenticator.instance
	}

	public authenticate(username: string, password: string): boolean {
		// логіка аутентифікації тут
		return true 
	}
}

const authenticator1 = Authenticator.getInstance()
const authenticator2 = Authenticator.getInstance()

console.log(authenticator1 === authenticator2) // повинно вивести true, оскільки це один і той же об'єкт

function main() {
	const authenticator = Authenticator.getInstance()
	console.log(authenticator.authenticate('username', 'password'))
}

main()
