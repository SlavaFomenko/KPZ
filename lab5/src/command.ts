export interface Command {
	execute(): void
}

export class ClickCommand implements Command {
	constructor(private message: string) {}

	execute(): void {
		console.log(this.message)
	}
}
