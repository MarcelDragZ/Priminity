import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Meeting,
  Member,
  Task,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { PryazHomeUiHomeComponent } from '@priminity/pryaz/home/ui-home';
import { map } from 'rxjs';

@Component({
  selector: 'priminity-pryaz-home-feature-home',
  standalone: true,
  imports: [
    CommonModule,
    PryazSharedHeadlineComponent,
    PryazHomeUiHomeComponent,
  ],
  template: `
    <div class="max-h-screen overflow-hidden h-screen">
      <priminity-pryaz-shared-headline [title]="'Home'" />

      <div class="flex justify-center items-center w-full h-full ">
        <priminity-pryaz-home-ui-home
          class="h-2/3 w-2/3"
          [memberList]="memberList$ | async"
          [taskList]="taskList$ | async"
          [meetingList]="meetingList$ | async"
        />
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazHomeFeatureHomeComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  member = new Member();
  task = new Task();
  meeting = new Meeting();

  activeTeamMember: [string, TeamMemberInterface] =
    this.activeRoute.snapshot.data['activeTeamMember']; //from Resolver

  memberList$ = this.member.getItems$().pipe(
    map((data) => {
      return Object.entries(data ?? {});
    }),
  );
  taskList$ = this.task.getItems$().pipe(
    map((data) => {
      return Object.entries(data ?? {});
    }),
  );
  meetingList$ = this.meeting.getItems$().pipe(
    map((data) => {
      return Object.entries(data ?? {});
    }),
  );
}
