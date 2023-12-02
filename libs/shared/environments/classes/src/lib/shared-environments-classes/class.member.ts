import { RealtimeDatabase } from "./class.realtimedatabase";

export interface MemberInterface {
  age: number;
  countryState: string;
  createdFrom: string;
  dateAccepted: string;
  dateBanned: string;
  dateExtended: string;
  dateRejected: string;
  dateTrialEnd: string;
  dateTrialStart: string;
  dateVerified: string;
  faceitRank: string;
  info: string;
  leavedClan: string;
  leavedClanDate: string;
  memberIndex: number;
  memberState: string;
  name: string;
  rank: string;
  reasonBanned: string;
  reasonExtended: string;
  reasonRejected: string;
  steamLink: string;
  trialPhases: number;
  trialPhasesExtended: number;
  trialState: string;
  tsId: string;
  username: string;
  memberComments: {
    commentCreator: string;
    commentDate: {
      date: string;
      time: string;
    }
    commentInput: string;
    commentMember: {
      memberId: string;
      memberName: string;
      memberUsername: string;
    }
  };
  memberUpdateBar: {
    updateCreator: string;
    updateDate: string;
    updateReason: string;
  };
  teamMemberComments: {
    commentCreator: string;
    commentDate: {
      date: string;
      time: string;
    }
    commentInput: string;
    commentMember: {
      memberId: number;
      memberName: string;
      memberUsername: string;
    }
  }
}

export class Member extends RealtimeDatabase<MemberInterface> {

  constructor() {
    super();
    this.dataBaseValue = 'members';
  }

}
