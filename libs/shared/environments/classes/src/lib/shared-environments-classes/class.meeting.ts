import { RealtimeDatabase } from './class.realtimedatabase';

export interface MeetingInterface {
  title: string;
  description: string;
  status: string;
  creatorId: string;
  createdTime: number;
  meetingTime: string;
}

export class Meeting extends RealtimeDatabase<MeetingInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'meetings';
  }
}
