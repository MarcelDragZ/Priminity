import { RealtimeDatabase } from './class.realtimedatabase';

export interface RuleInterface {
  creatorId: string;
  title: string;
  description: string;
  createdTime: number;
}

export class Rule extends RealtimeDatabase<RuleInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'rules';
  }
}
