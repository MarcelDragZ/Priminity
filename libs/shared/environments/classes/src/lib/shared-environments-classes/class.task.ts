import { RealtimeDatabase } from "./class.realtimedatabase";

export interface TaskInterface {
  createdFrom: string;
  date: string;
  description: string;
  status: string;
  title: string;
}

export class Task extends RealtimeDatabase<TaskInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'tasks';
  }

}
