import { RealtimeDatabase } from "./class.realtimedatabase";

export interface RuleInterface {
  creator: {
    name: string;
    position: string;
  };
  description: any;
  index: number;
  title: string;
}

export class Rule extends RealtimeDatabase<RuleInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'rules';
  }

}
