// Класи підписок
abstract class Subscription {
	monthlyFee: number
	minSubscriptionPeriod: number
	channels: string[]

	constructor(
		monthlyFee: number,
		minSubscriptionPeriod: number,
		channels: string[]
	) {
		this.monthlyFee = monthlyFee
		this.minSubscriptionPeriod = minSubscriptionPeriod
		this.channels = channels
	}
}

class DomesticSubscription extends Subscription {
	constructor() {
		super(10, 1, ['Basic Channels'])
	}
}

class EducationalSubscription extends Subscription {
	constructor() {
		super(20, 3, ['Educational Channels'])
	}
}

class PremiumSubscription extends Subscription {
	constructor() {
		super(30, 6, ['Premium Channels'])
	}
}

// Класи для створення підписок
interface SubscriptionFactory {
	createSubscription(): Subscription
}

class WebSite implements SubscriptionFactory {
	createSubscription(): Subscription {
		// Логіка вибору підписки через веб-сайт
		// В даному випадку, ми можемо вивести доступні варіанти підписок та дозволити користувачу обрати
		console.log('Available subscription types:')
		console.log('1. Domestic')
		console.log('2. Educational')
		console.log('3. Premium')
		const choice: number = 1 // Припустимо, що користувач обрав варіант "Domestic"
		switch (choice) {
			case 1:
				return new DomesticSubscription()
			case 2:
				return new EducationalSubscription()
			case 3:
				return new PremiumSubscription()
			default:
				throw new Error('Invalid subscription type')
		}
	}
}

class MobileApp implements SubscriptionFactory {
	createSubscription(): Subscription {
		// аналогічно до класу WebSite але типу з функціоналом додатку :)
		return new EducationalSubscription() // типу вибрали EducationalSubscription
	}
}

class ManagerCall implements SubscriptionFactory {
	createSubscription(): Subscription {
		// аналогічно до  класу WebSite але типу з дзвінка до менеджера :)
		return new PremiumSubscription() // типу вибрали EducationalSubscription PremiumSubscription();
	}
}

// Приклад використання
function main() {
	const website = new WebSite()
	const mobileApp = new MobileApp()
	const managerCall = new ManagerCall()

	const subscription1 = website.createSubscription()
	const subscription2 = mobileApp.createSubscription()
	const subscription3 = managerCall.createSubscription()

	console.log(subscription1)
	console.log(subscription2)
	console.log(subscription3)
}

main()
