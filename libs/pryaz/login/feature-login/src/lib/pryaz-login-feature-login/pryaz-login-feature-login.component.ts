import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PryazSharedWelcomeComponent } from '@priminity/pryaz/shared/welcome';
import { PryazLoginUiLoginComponent } from '@priminity/pryaz/login/ui-login';
import {
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-login-feature-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PryazSharedWelcomeComponent,
    PryazLoginUiLoginComponent,
  ],
  template: `
    <priminity-pryaz-shared-welcome />
    <div
      class="flex flex-col items-end md:flex-row md:justify-end text-white m-16"
    >
      Not a PryaZ user?
      <a
        [routerLink]="['/registry']"
        class="bg-userColor ml-5 p-1 rounded cursor-pointer hover:opacity-80 transition-all"
      >
        Sign up</a
      >
    </div>
    <priminity-pryaz-login-ui-login (loginUser)="login($event)" />
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PryazLoginFeatureLoginComponent {
  router: Router = inject(Router);

  teamMember = new TeamMember();

  async login(enteredTeamMember: Partial<TeamMemberInterface>) {
    const foundTeamMember: [string, TeamMemberInterface] | null =
      await this.teamMember.checkValidLogin(enteredTeamMember);

    if (foundTeamMember && typeof foundTeamMember[0] === 'string') {
      this.teamMember.setLocalStorage(foundTeamMember[0]);
      this.router.navigate(['/home']);
    }
  }
}
