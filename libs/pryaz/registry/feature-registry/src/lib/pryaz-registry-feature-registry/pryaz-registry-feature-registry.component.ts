import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { PryazRegistryUiRegistryComponent } from '@priminity/pryaz/registry/ui-registry';
import { PryazSharedLogoComponent } from '@priminity/pryaz/shared/logo';
import {
  RegCode,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-registry-feature-registry',
  standalone: true,
  imports: [
    CommonModule,
    PryazRegistryUiRegistryComponent,
    PryazSharedLogoComponent,
  ],
  template: `
    <priminity-pryaz-shared-logo />
    <div class="flex justify-center items-center h-screen w-screen ">
      <priminity-pryaz-registry-ui-registry (teamMember)="signUp($event)" />
    </div>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazRegistryFeatureRegistryComponent {
  router: Router = inject(Router);

  teamMember = new TeamMember();
  regCode = new RegCode();

  signUp({
    teamMember,
    regCode,
  }: {
    teamMember: TeamMemberInterface;
    regCode: string;
  }) {
    this.teamMember.setItem({
      ...teamMember,
      password: this.teamMember.hash(teamMember.password),
    });
    this.regCode.deleteItem(regCode);
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
