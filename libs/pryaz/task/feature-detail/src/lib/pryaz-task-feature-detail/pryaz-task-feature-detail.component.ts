import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

import {
  DialogActionInterface,
  Task,
  TaskInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazTaskUiDetailComponent } from '@priminity/pryaz/task/ui-detail';
import { PryazSharedFullscreenDialogComponent } from '@priminity/pryaz/shared/fullscreen-dialog';

@Component({
  selector: 'priminity-pryaz-task-feature-detail',
  standalone: true,
  imports: [
    CommonModule,
    PryazTaskUiDetailComponent,
    PryazSharedFullscreenDialogComponent,
  ],
  template: `
    <ng-container *ngIf="specificTask$ | async as TaskInterface">
      <ng-container *ngIf="specificTeamMember$ | async as TeamMemberInterface">
        <priminity-pryaz-task-ui-detail
          [specificTask]="specificTask$ | async"
          [specificTeamMember]="specificTeamMember$ | async"
          (dialogDeleteTask)="dialogDeleteTask()"
          (editSaveTask)="editSaveTask($event)"
        />

        <priminity-pryaz-shared-fullscreen-dialog
          *ngIf="dialog"
          [dialogEvent]="{
            title: TaskInterface.title,
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
export class PryazTaskFeatureDetailComponent implements OnDestroy {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  task = new Task();
  teamMember = new TeamMember();

  taskId!: string;
  dialog = false;

  activeRouteSubscription = this.activeRoute.data
    .pipe(
      map((data) => {
        return data['activeRouteId'];
      }),
    )
    .subscribe((data) => (this.taskId = data));

  readonly specificTask$: Observable<TaskInterface> =
    this.task.getSpecificItem$(this.taskId) as Observable<TaskInterface>;

  readonly specificTeamMember$: Observable<[string, TeamMemberInterface]> =
    this.teamMember.syncValidTeamMember() as Observable<
      [string, TeamMemberInterface]
    >;

  ngOnDestroy(): void {
    if (this.activeRouteSubscription) {
      this.activeRouteSubscription.unsubscribe();
    }
  }

  async editSaveTask(editTask: Partial<TaskInterface>) {
    await this.task.updateItem(this.taskId, editTask);
  }

  dialogDeleteTask() {
    if (this.dialog) {
      this.dialog = false;
    }
    if (!this.dialog) {
      this.dialog = true;
    }
  }

  dialogAction(dialogAction: DialogActionInterface) {
    if (dialogAction.action === 'delete') {
      this.task.deleteItem(this.taskId);
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
