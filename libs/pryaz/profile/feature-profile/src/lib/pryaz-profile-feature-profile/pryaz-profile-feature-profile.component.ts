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
  />`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazProfileFeatureProfileComponent implements OnDestroy {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  teamMember = new TeamMember();

  teamMemberId!: string;
  activeRouteSubscription = this.activeRoute.data
    .pipe(
      map((data) => {
        return data['activeRouteId'];
      })
    )
    .subscribe((data) => (this.teamMemberId = data));

  specificTeamMember$: Observable<TeamMemberInterface> =
    this.teamMember.getSpecificItem$(
      this.teamMemberId
    ) as Observable<TeamMemberInterface>;

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
  }
}
