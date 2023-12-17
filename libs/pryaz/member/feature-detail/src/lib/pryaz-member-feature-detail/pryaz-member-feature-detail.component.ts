import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import { PryazMemberUiDetailComponent } from '@priminity/pryaz/member/ui-detail';
import { PryazSharedFullscreenDialogComponent } from '@priminity/pryaz/shared/fullscreen-dialog';
import {
  DialogActionInterface,
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-member-feature-detail',
  standalone: true,
  imports: [
    CommonModule,
    PryazMemberUiDetailComponent,
    PryazSharedFullscreenDialogComponent,
  ],
  template: `
    <ng-container *ngIf="specificMember$ | async as MemberInterface">
      <priminity-pryaz-member-ui-detail
        [specificMember]="specificMember$ | async"
        [specificTeamMember]="specificTeamMember$ | async"
        [memberId]="memberId"
        (dialogEvents)="dialogEvents($event)"
        (editSaveMember)="editSaveMember($event)"
      />
      <priminity-pryaz-shared-fullscreen-dialog
        *ngIf="dialog"
        [dialogEvent]="{
          title: MemberInterface.userName + ' | ' + MemberInterface.name,
          action: statusAction
        }"
        (emitDialogEvent)="dialogAction($event)"
      />
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureDetailComponent implements OnDestroy {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  member = new Member();
  teamMember = new TeamMember();
  timestamp = new Timestamp();

  memberId!: string;
  dialog = false;
  statusAction!: string;

  activeRouteSubscription = this.activeRoute.data
    .pipe(
      map((data) => {
        return data['activeRouteId'];
      }),
    )
    .subscribe((data) => (this.memberId = data));

  readonly specificMember$: Observable<MemberInterface> =
    this.member.getSpecificItem$(this.memberId) as Observable<MemberInterface>;

  readonly specificTeamMember$: Observable<[string, TeamMemberInterface]> =
    this.teamMember.syncValidTeamMember() as Observable<
      [string, TeamMemberInterface]
    >;

  specificMember!: MemberInterface;

  specificMemberSubscription = this.specificMember$.subscribe((data) => {
    this.specificMember = data;
  });

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
    if (this.specificMemberSubscription) {
      this.specificMemberSubscription.unsubscribe();
    }
  }

  async editSaveMember(editMember: Partial<MemberInterface>) {
    await this.member.updateItem(this.memberId, editMember);
  }

  dialogEvents(action: string) {
    if (action === 'trial') {
      this.statusAction = 'trial';
    }

    if (action === 'leaved') {
      this.statusAction = 'leaved';
    }

    if (action === 'accepted') {
      this.statusAction = 'accepted';
    }

    if (action === 'extended') {
      this.statusAction = 'extended';
    }

    if (action === 'rejected') {
      this.statusAction = 'rejected';
    }

    if (action === 'banned') {
      this.statusAction = 'banned';
    }

    if (action === 'unbanned') {
      this.statusAction = 'unbanned';
    }
    if (action === 'delete') {
      this.statusAction = 'delete';
    }
    this.toggleDialog();
  }

  toggleDialog() {
    if (this.dialog) {
      this.dialog = false;
    }
    if (!this.dialog) {
      this.dialog = true;
    }
  }

  async dialogAction(dialogAction: DialogActionInterface) {
    let trialPhases = 1;
    let trialPhasesExtended = 1;
    this.dialog = false;
    if (this.specificMember.trialState.trialPhases) {
      trialPhases = parseFloat(
        this.specificMember.trialState.trialPhases.toString(),
      );
      trialPhases++;
    }

    if (this.specificMember.trialState.trialPhasesExtended) {
      trialPhasesExtended = parseFloat(
        this.specificMember.trialState.trialPhasesExtended.toString(),
      );
      trialPhasesExtended++;
    }

    if (dialogAction.action === 'trial') {
      await this.member.updateItem(this.memberId, {
        memberState: 'trial',
        trialState: {
          type: 'trial',
          typeChangeTime: new Date().getTime(),
          trialEndTime: this.timestamp.getWednesdayInTwoWeeks(),
          trialPhases: trialPhases,
          trialPhasesExtended: 0,
          reason: '',
        },
      });
    }
    if (dialogAction.action === 'leaved') {
      await this.member.updateItem(this.memberId, {
        memberState: 'verified',
        trialState: {
          type: 'leaved',
          typeChangeTime: new Date().getTime(),
          trialEndTime: null,
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: 0,
          reason: dialogAction.description,
        },
      });
    }
    if (dialogAction.action === 'accepted') {
      await this.member.updateItem(this.memberId, {
        memberState: 'member',
        trialState: {
          type: 'accepted',
          typeChangeTime: new Date().getTime(),
          trialEndTime: null,
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: 0,
          reason: '',
        },
      });
    }
    if (dialogAction.action === 'extended') {
      await this.member.updateItem(this.memberId, {
        trialState: {
          type: 'extended',
          typeChangeTime: new Date().getTime(),
          trialEndTime: this.timestamp.getNextWednesday(),
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: trialPhasesExtended,
          reason: dialogAction.description,
        },
      });
    }
    if (dialogAction.action === 'rejected') {
      await this.member.updateItem(this.memberId, {
        memberState: 'verified',
        trialState: {
          type: 'rejected',
          typeChangeTime: new Date().getTime(),
          trialEndTime: null,
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: 0,
          reason: dialogAction.description,
        },
      });
    }
    if (dialogAction.action === 'banned') {
      await this.member.updateItem(this.memberId, {
        memberState: 'banned',
        trialState: {
          type: 'banned',
          typeChangeTime: new Date().getTime(),
          trialEndTime: null,
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: 0,
          reason: dialogAction.description,
        },
      });
    }
    if (dialogAction.action === 'unbanned') {
      await this.member.updateItem(this.memberId, {
        memberState: 'verified',
        trialState: {
          type: 'unbanned',
          typeChangeTime: new Date().getTime(),
          trialEndTime: null,
          trialPhases: this.specificMember.trialState.trialPhases,
          trialPhasesExtended: 0,
          reason: dialogAction.description,
        },
      });
    }
    if (dialogAction.action === 'delete') {
      await this.member.deleteItem(this.memberId);
      this.router.navigateByUrl(
        this.router.createUrlTree(['list'], {
          relativeTo: this.activeRoute.parent,
          queryParamsHandling: 'merge',
          preserveFragment: true,
        }),
      );
    }
  }
}
