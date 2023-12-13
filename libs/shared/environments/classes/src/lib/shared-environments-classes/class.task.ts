import { RealtimeDatabase } from './class.realtimedatabase';

export interface TaskInterface {
  title: string;
  description: string;
  status: string;
  creatorId: string;
  createdTime: number | null;
}

export class Task extends RealtimeDatabase<TaskInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'tasks';
  }
}
