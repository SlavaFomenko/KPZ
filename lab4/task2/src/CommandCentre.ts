import { Aircraft } from './Aircraft'
import { Runway } from './Runway'

export class CommandCentre {
	private runways: Runway[] = []
	private aircrafts: Aircraft[] = []

	constructor(runways: Runway[], aircrafts: Aircraft[]) {
		this.runways = runways
		this.aircrafts = aircrafts
	}

	public requestToLand(aircraft: Aircraft): void {
		let freeRunway: Runway | null = null
		for (let i = 0; i < this.runways.length; i++) {
			if (this.runways[i].isBusyWithAircraft === null) {
				freeRunway = this.runways[i]
				break
			}
		}

		if (freeRunway) {
			aircraft.land()
			freeRunway.isBusyWithAircraft = aircraft
		} else {
			console.log(`Could not land ${aircraft.name}, all runways are busy.`)
		}
	}

	public requestToTakeOff(aircraft: Aircraft): void {
		let assignedRunway: Runway | null = null
		for (let i = 0; i < this.runways.length; i++) {
			if (this.runways[i].isBusyWithAircraft === aircraft) {
				assignedRunway = this.runways[i]
				break
			}
		}

		if (assignedRunway) {
			aircraft.takeOff()
			assignedRunway.isBusyWithAircraft = null
		} else {
			console.log(
				`Could not take off ${aircraft.name}, aircraft is not assigned to any runway.`
			)
		}
	}
}
