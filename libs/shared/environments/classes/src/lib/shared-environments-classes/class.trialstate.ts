import { RealtimeDatabase } from './class.realtimedatabase';

export interface TrialStateInterface {
  creatorId: string;
  type: string;
  typeChangeTime: number;
  trialEndTime: number;
  time: number;
  trialPhases: number;
  trialPhasesExtended: number;
  reason?: string;
}

export class TrialState extends RealtimeDatabase<TrialStateInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'trialState';
  }
}
