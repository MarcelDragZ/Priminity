import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import {
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

export const HeadModLoggedInAuthGuard: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  const teamMember = new TeamMember();

  const validTeamMember: [string, TeamMemberInterface] | null =
    await teamMember.checkValidTeamMember();

  if (
    (validTeamMember && validTeamMember![1].position === 'Admin') ||
    validTeamMember![1].position === 'Supervisor' ||
    validTeamMember![1].position === 'Head-Mod'
  ) {
    return true;
  } else {
    await router.navigate(['/login']);
    return false;
  }
};
