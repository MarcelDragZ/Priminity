import { firstValueFrom, map } from 'rxjs';
import * as bcrypt from 'bcryptjs';

import { RealtimeDatabase } from './class.realtimedatabase';

export interface TeamMemberInterface {
  userName: string;
  name: string;
  email: string;
  password: string;
  position: string;
  colorScheme: string;
  active: boolean;
  steamLink: string;
  twitchLink: string;
  youtubeLink: string;
  instagramLink: string;
  tiktokLink: string;
}

export class TeamMember extends RealtimeDatabase<TeamMemberInterface> {
  constructor() {
    super();
    this.dataBaseValue = 'teamMembers';
  }

  hash(text: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(text, salt);
  }

  compareHash(text: string, hashedText: string) {
    return bcrypt.compareSync(text, hashedText);
  }

  async checkValidLogin(enteredTeamMember: Partial<TeamMemberInterface>) {
    return await firstValueFrom(
      this.getItems$().pipe(
        map((teamMember) => {
          const foundTeamMember: [string, TeamMemberInterface] | undefined =
            Object.entries(teamMember ?? {}).find(
              (value) =>
                value[1].userName.toLowerCase() ===
                enteredTeamMember.userName?.toLowerCase()
            );
          if (
            foundTeamMember &&
            foundTeamMember[1].active &&
            enteredTeamMember.password !== undefined &&
            this.compareHash(
              enteredTeamMember.password,
              foundTeamMember[1].password
            )
          ) {
            return foundTeamMember as [string, TeamMemberInterface];
          } else {
            return null;
          }
        })
      )
    );
  }

  async checkValidTeamMember() {
    return await firstValueFrom(
      this.getItems$().pipe(
        map((teamMember) => {
          const foundTeamMember: [string, TeamMemberInterface] | undefined =
            Object.entries(teamMember ?? {}).find((value) => {
              return this.compareHash(value[0], this.parseLocalStorage() || '');
            });

          if (foundTeamMember && foundTeamMember[1].active) {
            return foundTeamMember as [string, TeamMemberInterface];
          } else {
            return null;
          }
        })
      )
    );
  }

  syncValidTeamMember() {
    return this.getItems$().pipe(
      map((teamMember) => {
        const foundTeamMember: [string, TeamMemberInterface] | undefined =
          Object.entries(teamMember ?? {}).find((value) => {
            return this.compareHash(value[0], this.parseLocalStorage() || '');
          });

        if (foundTeamMember && foundTeamMember[1].active) {
          return foundTeamMember as [string, TeamMemberInterface];
        } else {
          return null;
        }
      })
    );
  }

  setLocalStorage(teamMemberId: string) {
    localStorage.setItem(this.dataBaseValue, this.hash(teamMemberId));
  }

  parseLocalStorage() {
    return localStorage.getItem(this.dataBaseValue);
  }
}
