import { Aircraft } from './Aircraft'

export class Runway {
  public readonly id: string = this.generateId();
  public isBusyWithAircraft: Aircraft | null = null;

  private generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  public checkIsActive(): boolean {
    return !!this.isBusyWithAircraft?.isTakingOff;
  }
}