import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberInterface } from '@priminity/shared/environments/classes';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'priminity-pryaz-home-feature-home',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>pryaz-home-feature-home works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazHomeFeatureHomeComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  activeTeamMember: [string, TeamMemberInterface] =
    this.activeRoute.snapshot.data['activeTeamMember']; //from Resolver
}
