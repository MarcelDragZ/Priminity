import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import {
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazProfileUiProfileComponent } from '@priminity/pryaz/profile/ui-profile';
@Component({
  selector: 'priminity-pryaz-profile-feature-profile',
  standalone: true,
  imports: [CommonModule, PryazProfileUiProfileComponent],
  template: ` <priminity-pryaz-profile-ui-profile
    [specificTeamMember]="specificTeamMember$ | async"
    [teamMemberId]="teamMemberId"
    [memberList]="memberList$ | async"
    [teamMemberId]="teamMemberId"
    (emitTeamMember)="saveEditTeamMember($event)"
  />`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazProfileFeatureProfileComponent implements OnDestroy {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  teamMember = new TeamMember();
  member = new Member();

  teamMemberId!: string;
  activeRouteSubscription = this.activeRoute.data
    .pipe(
      map((data) => {
        return data['activeRouteId'];
      }),
    )
    .subscribe((data) => (this.teamMemberId = data));

  specificTeamMember$: Observable<TeamMemberInterface> =
    this.teamMember.getSpecificItem$(
      this.teamMemberId,
    ) as Observable<TeamMemberInterface>;

  memberList$: Observable<[string, MemberInterface][]> = this.member
    .getItems$()
    .pipe(
      map((members) => {
        return Object.entries(members ?? {});
      }),
    );

  async saveEditTeamMember(editTeamMember: Partial<TeamMemberInterface>) {
    await this.teamMember.updateItem(this.teamMemberId, editTeamMember);
  }

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
  }
}
