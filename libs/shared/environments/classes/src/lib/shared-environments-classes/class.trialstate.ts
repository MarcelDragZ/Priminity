import { RealtimeDatabase } from './class.realtimedatabase';

export interface TrialStateInterface {
  type: string;
  typeChangeTime: number | null;
  trialEndTime: number | null;
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
