import { ResolveFn } from '@angular/router';
import {
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

export const ActiveTeamMemberResolver: ResolveFn<
  [string, TeamMemberInterface] | null
> = async (route, state) => {
  const teamMember = new TeamMember();

  const validTeamMember: [string, TeamMemberInterface] | null =
    await teamMember.checkValidTeamMember();

  if (validTeamMember) {
    return validTeamMember;
  } else {
    return null;
  }
};
