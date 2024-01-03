import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { PryazTeammemberUiDetailComponent } from '@priminity/pryaz/teammember/ui-detail';
import {
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-teammember-feature-detail',
  standalone: true,
  imports: [CommonModule, PryazTeammemberUiDetailComponent],
  template: ` <priminity-pryaz-teammember-ui-detail
    [specificTeamMember]="specificTeamMember$ | async"
    [loggedTeamMember]="loggedTeamMember$ | async"
    [memberList]="memberList$ | async"
    [teamMemberId]="teamMemberId"
    (emitTeamMember)="saveEditTeamMember($event)"
  />`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberFeatureDetailComponent implements OnDestroy {
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

  readonly loggedTeamMember$: Observable<[string, TeamMemberInterface]> =
    this.teamMember.syncValidTeamMember() as Observable<
      [string, TeamMemberInterface]
    >;

  async saveEditTeamMember(editTeamMember: Partial<TeamMemberInterface>) {
    await this.teamMember.updateItem(this.teamMemberId, editTeamMember);
  }

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
  }
}
