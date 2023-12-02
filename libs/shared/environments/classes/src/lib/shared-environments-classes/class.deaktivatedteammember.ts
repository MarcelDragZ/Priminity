import { RealtimeDatabase } from './class.realtimedatabase';

export interface DeaktivatedTeamMemberInterface {
  name: string;
  userName: string;
  email: string;
  password: string;
  position: string;
  colorScheme: string;
  steamLink: string;
  twitchLink: string;
  youtubeLink: string;
  instagramLink: string;
  tiktokLink: string;
}

export class DeaktivatedteamMemberTeamMember extends RealtimeDatabase<DeaktivatedTeamMemberInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'deaktivatedTeamMembers';
  }
}
