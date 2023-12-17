import { RealtimeDatabase } from './class.realtimedatabase';

export interface MeetingInterface {
  title: string;
  description: string;
  status: string;
  creatorId: string;
  createdTime: number | null;
  meetingTime: string | number | null;
}

export class Meeting extends RealtimeDatabase<MeetingInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'meetings';
  }
}
