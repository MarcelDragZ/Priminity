import { RealtimeDatabase } from './class.realtimedatabase';

export interface UpdateBarInterface {
  creatorId: string;
  createdTime: number;
  description: string;
  memberId?: string;
}

export class UpdateBar extends RealtimeDatabase<UpdateBarInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'updateBar';
  }
}
