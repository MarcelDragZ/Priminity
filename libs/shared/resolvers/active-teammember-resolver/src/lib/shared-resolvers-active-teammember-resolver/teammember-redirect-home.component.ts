import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import {
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

export const TeamMemberRedirectHomeResolver: ResolveFn<
  [string, TeamMemberInterface] | null
> = async (route, state) => {
  const router: Router = inject(Router);
  const teamMember = new TeamMember();

  const validTeamMember: [string, TeamMemberInterface] | null =
    await teamMember.checkValidTeamMember();

  if (validTeamMember) {
    router.navigate(['/home']);
    return validTeamMember;
  } else {
    return null;
  }
};
