import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { PryazMeetingUiDetailComponent } from '@priminity/pryaz/meeting/ui-detail';
import { PryazSharedFullscreenDialogComponent } from '@priminity/pryaz/shared/fullscreen-dialog';
import {
  DialogActionInterface,
  Meeting,
  MeetingInterface,
  TeamMember,
  TeamMemberInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';
@Component({
  selector: 'priminity-pryaz-meeting-feature-detail',
  standalone: true,
  imports: [
    CommonModule,
    PryazMeetingUiDetailComponent,
    PryazSharedFullscreenDialogComponent,
  ],
  template: `
    <ng-container *ngIf="specificMeeting$ | async as MeetingInterface">
      <ng-container *ngIf="specificTeamMember$ | async as TeamMemberInterface">
        <priminity-pryaz-meeting-ui-detail
          [specificMeeting]="specificMeeting$ | async"
          [specificTeamMember]="specificTeamMember$ | async"
          (dialogDeleteMeeting)="dialogDeleteMeeting()"
          (editSaveMeeting)="editSaveMeeting($event)"
        />

        <priminity-pryaz-shared-fullscreen-dialog
          *ngIf="dialog"
          [dialogEvent]="{
            title: MeetingInterface.title,
            action: 'delete'
          }"
          (emitDialogEvent)="dialogAction($event)"
        />
      </ng-container>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureDetailComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  meeting = new Meeting();
  teamMember = new TeamMember();
  timestamp = new Timestamp();

  meetingId!: string;
  dialog = false;

  activeRouteSubscription = this.activeRoute.data
    .pipe(
      map((data) => {
        return data['activeRouteId'];
      }),
    )
    .subscribe((data) => (this.meetingId = data));

  readonly specificMeeting$: Observable<MeetingInterface> =
    this.meeting.getSpecificItem$(
      this.meetingId,
    ) as Observable<MeetingInterface>;

  readonly specificTeamMember$: Observable<[string, TeamMemberInterface]> =
    this.teamMember.syncValidTeamMember() as Observable<
      [string, TeamMemberInterface]
    >;

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
  }

  async editSaveMeeting(editMeeting: Partial<MeetingInterface>) {
    await this.meeting.updateItem(this.meetingId, {
      ...editMeeting,
      meetingTime: this.timestamp.getTimestampFromDate(
        editMeeting.meetingTime ? editMeeting.meetingTime : '',
      ),
    });
  }

  dialogDeleteMeeting() {
    if (this.dialog) {
      this.dialog = false;
    }
    if (!this.dialog) {
      this.dialog = true;
    }
  }

  dialogAction(dialogAction: DialogActionInterface) {
    if (dialogAction.action === 'delete') {
      this.meeting.deleteItem(this.meetingId);
      this.router.navigateByUrl(
        this.router.createUrlTree(['list'], {
          relativeTo: this.activeRoute.parent,
          queryParamsHandling: 'merge',
          preserveFragment: true,
        }),
      );
    }
    if (!dialogAction.action && this.dialog) {
      this.dialog = false;
    }
  }
}
