import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PryazTaskUiCreateComponent } from '@priminity/pryaz/task/ui-create';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Task,
  TaskInterface,
  TeamMember,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-task-feature-create',
  standalone: true,
  imports: [CommonModule, PryazTaskUiCreateComponent],
  template: `
    <priminity-pryaz-task-ui-create (saveCreateTask)="createTask($event)" />
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTaskFeatureCreateComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  task = new Task();
  teamMember = new TeamMember();

  async createTask(newTask: TaskInterface) {
    const teamMember = await this.teamMember.checkValidTeamMember();
    if (teamMember) {
      this.task.setItem({
        ...newTask,
        creatorId: teamMember[0],
        createdTime: new Date().getTime(),
      });
    }
  }
}
