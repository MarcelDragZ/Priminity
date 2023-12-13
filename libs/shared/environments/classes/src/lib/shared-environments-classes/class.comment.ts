import { RealtimeDatabase } from './class.realtimedatabase';

export interface CommentInterface {
  creatorId: string;
  createdTime: number;
  description: string;
  type: string;
  memberId?: string;
}

export class Comment extends RealtimeDatabase<CommentInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'comments';
  }
}
