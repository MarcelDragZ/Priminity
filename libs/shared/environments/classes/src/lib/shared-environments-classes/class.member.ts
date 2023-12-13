import { RealtimeDatabase } from './class.realtimedatabase';
import { CommentInterface } from './class.comment';
import { UpdateBarInterface } from './class.updatebar';
import { TrialStateInterface } from './class.trialstate';

export interface MemberInterface {
  creatorId: string;
  createdTime: number;
  name: string;
  username: string;
  age: number;
  countryState: string;
  faceitRank: string;
  rank: string;
  tsId: string;
  steamLink: string;
  info: string;
  memberState: string;
  trialState: TrialStateInterface;
  updateBar: { [key: string]: UpdateBarInterface };
  comments: { [key: string]: CommentInterface };
}

export class Member extends RealtimeDatabase<MemberInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'members';
  }
}
