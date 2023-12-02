import { RealtimeDatabase } from "./class.realtimedatabase";

export interface MeetingInterface {
  creator: string;
  date: string;
  description: string;
  index: string;
  meetingDate: string;
  status: string;
  title: string;
}

export class Meeting extends RealtimeDatabase<MeetingInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'meetings';
  }

}
