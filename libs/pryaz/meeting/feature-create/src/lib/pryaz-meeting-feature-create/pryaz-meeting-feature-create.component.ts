import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Meeting,
  MeetingInterface,
  TeamMember,
  Timestamp,
} from '@priminity/shared/environments/classes';
import { PryazMeetingUiCreateComponent } from '@priminity/pryaz/meeting/ui-create';

@Component({
  selector: 'priminity-pryaz-meeting-feature-create',
  standalone: true,
  imports: [CommonModule, PryazMeetingUiCreateComponent],
  template: `
    <priminity-pryaz-meeting-ui-create
      (saveCreateMeeting)="createMeeting($event)"
    />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureCreateComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  meeting = new Meeting();
  teamMember = new TeamMember();
  timestamp = new Timestamp();

  async createMeeting(newMeeting: MeetingInterface) {
    const teamMember = await this.teamMember.checkValidTeamMember();
    if (teamMember) {
      await this.meeting.setItem({
        ...newMeeting,
        creatorId: teamMember[0],
        createdTime: new Date().getTime(),
        meetingTime: this.timestamp.getTimestampFromDate(
          newMeeting.meetingTime ? newMeeting.meetingTime : '',
        ),
      });
    }
  }
}
