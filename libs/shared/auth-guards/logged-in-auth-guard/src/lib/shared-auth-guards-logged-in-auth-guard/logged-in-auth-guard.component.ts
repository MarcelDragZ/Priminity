import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import {
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

export const LoggedInAuthGuard: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  const teamMember = new TeamMember();

  const validTeamMember: [string, TeamMemberInterface] | null =
    await teamMember.checkValidTeamMember();

  if (validTeamMember) {
    return true;
  } else {
    await router.navigate(['/login']);
    return false;
  }
};
