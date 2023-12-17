import { push, ref, remove, set, update } from '@angular/fire/database';

import { RealtimeDatabase } from './class.realtimedatabase';
import { CommentInterface } from './class.comment';
import { UpdateBarInterface } from './class.updatebar';
import { TrialStateInterface } from './class.trialstate';

export interface MemberInterface {
  creatorId: string;
  createdTime: number | null;
  name: string;
  userName: string;
  age: number | null;
  countryState: string;
  faceitRank: string;
  rank: string;
  tsId: string;
  steamLink: string;
  info: string;
  memberState: string;
  trialState: TrialStateInterface;
  updateBar?: { [key: string]: UpdateBarInterface };
  comments?: { [key: string]: CommentInterface };
}

export class Member extends RealtimeDatabase<MemberInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'members';
  }

  async setCommentItem(databaseId: string, item: CommentInterface) {
    await set(
      push(ref(this.db, `${this.dataBaseValue}/${databaseId}/comments`)),
      item,
    );
  }

  async deleteCommentItem(databaseId: string, commentId: string) {
    await remove(
      ref(this.db, `${this.dataBaseValue}/${databaseId}/comments/` + commentId),
    );
  }

  async updateCommentItem(
    databaseId: string,
    commentId: string,
    item: Partial<CommentInterface>,
  ) {
    await update(
      ref(this.db, `${this.dataBaseValue}/${databaseId}/comments/` + commentId),
      item,
    );
  }
}
