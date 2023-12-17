import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  TaskInterface,
  TeamMember,
  Timestamp,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-task-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<table class="w-full text-white ">
    <tr
      class="bg-neutral-900 h-10 border-b-userColor border-opacity-30 border-b-2"
    >
      <td class="pl-5">Nr.</td>
      <td>Titel</td>
      <td>Status</td>
      <td>Erstellt von</td>
      <td>Erstellt am</td>
    </tr>

    <ng-container *ngFor="let task of taskList; let i = index">
      <tr
        (click)="editTask(task[0])"
        class="h-9 border-b-neutral-900 border-b-2 border-opacity-80 cursor-pointer hover:bg-neutral-900 transition-all"
      >
        <td class="pl-5">{{ i + 1 }}</td>
        <td>{{ task[1].title }}</td>
        <td>
          <span
            class="p-0.5 rounded"
            [ngClass]="
              task[1].status === 'open'
                ? 'bg-blue-600'
                : task[1].status === 'progress'
                  ? 'bg-orange-600'
                  : task[1].status === 'closed'
                    ? 'bg-green-600'
                    : 'bg-blue-600'
            "
          >
            {{
              task[1].status === 'open'
                ? 'Offen'
                : task[1].status === 'progress'
                  ? 'In Bearbeitung'
                  : task[1].status === 'closed'
                    ? 'Abgeschlossen'
                    : 'Offen'
            }}</span
          >
        </td>
        <td>
          {{ teamMember.getNameById(task[1].creatorId) | async }}
        </td>
        <td>{{ timestamp.getDateFromTimestamp(task[1].createdTime) }}</td>
      </tr>
    </ng-container>
  </table>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTaskUiListComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  testName!: string;

  @Input() taskList!: [string, TaskInterface][] | null;

  timestamp = new Timestamp();
  teamMember = new TeamMember();

  editTask(taskId: string) {
    this.router.navigateByUrl(
      this.router.createUrlTree(['detail', taskId], {
        relativeTo: this.activeRoute.parent,
        queryParamsHandling: 'merge',
        preserveFragment: true,
      }),
    );
  }
}
