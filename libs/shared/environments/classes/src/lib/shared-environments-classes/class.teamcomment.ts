import { RealtimeDatabase } from "./class.realtimedatabase";

export interface TeamCommentInterface {
  commentCreator: string;
  commentDate: {
    date: string;
    time: string;
  };
  commentInput: string;
  commentMember: {
    memberName: string;
    memberUsername: string;
  }
}

export class TeamComment extends RealtimeDatabase<TeamCommentInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'teamComments';
  }

}
