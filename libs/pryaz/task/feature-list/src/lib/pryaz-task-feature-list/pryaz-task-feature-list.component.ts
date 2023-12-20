import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  switchMap,
} from 'rxjs';

import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { PryazTaskUiListComponent } from '@priminity/pryaz/task/ui-list';
import { Task, TaskInterface } from '@priminity/shared/environments/classes';
@Component({
  selector: 'priminity-pryaz-task-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PryazTaskUiListComponent,
    PryazSharedHeadlineComponent,
  ],
  template: `<priminity-pryaz-shared-headline [title]="'Aufgaben Liste'" />
    <a
      [routerLink]="['/task/create']"
      class="ml-5 bg-userColor p-1 text-white rounded hover:opacity-80 transition-all cursor-pointer"
    >
      Aufgabe erstellen
    </a>
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between"
    >
      <div
        class="flex w-full sm:w-auto text-sm sm:text-base text-white sm:pr-0 pr-5 sm:pl-0 pl-5 mt-5 sm:m-5 cursor-pointer"
      >
        <div
          (click)="changeListFilter('all')"
          [ngClass]="
            (listFilter$ | async) === 'all'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-12 pb-2 text-center transition-all"
        >
          Alle
        </div>
        <div
          (click)="changeListFilter('open')"
          [ngClass]="
            (listFilter$ | async) === 'open'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-16 pb-2 text-center transition-all"
        >
          Offen
        </div>
        <div
          (click)="changeListFilter('progress')"
          [ngClass]="
            (listFilter$ | async) === 'progress'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-32 pb-2 text-center transition-all"
        >
          In Bearbeitung
        </div>
        <div
          (click)="changeListFilter('closed')"
          [ngClass]="
            (listFilter$ | async) === 'closed'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-32 pb-2 text-center transition-all"
        >
          Abgeschlossen
        </div>
      </div>

      <div class="m-5">
        <input
          placeholder="Suche"
          class="border-userColor w-full border-b-2 p-2 rounded bg-transparent text-white placeholder:text-white"
          [(ngModel)]="searchFilter"
          (keyup)="changeSearchFilter()"
          type="text"
          name="searchInput"
        />
      </div>
    </div>

    <priminity-pryaz-task-ui-list [taskList]="taskList$ | async" /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTaskFeatureListComponent {
  task = new Task();

  searchFilter = '';

  listFilter$ = new BehaviorSubject<string>('all');
  searchFilter$ = new BehaviorSubject<string>('');

  taskList$: Observable<[string, TaskInterface][]> = combineLatest([
    this.listFilter$,
    this.searchFilter$,
  ]).pipe(
    switchMap(([filter, searchFilter]) =>
      this.task.getItems$().pipe(
        map((tasks) => {
          let sorted = Object.entries(tasks ?? {}).sort((a, b) => {
            return (
              this.getPositionRank(a[1].status) -
                this.getPositionRank(b[1].status) ||
              b[1].createdTime - a[1].createdTime
            );
          });
          if (filter !== 'all') {
            sorted = sorted.filter((task) =>
              filter === 'open'
                ? task[1].status === 'open'
                : filter === 'progress'
                  ? task[1].status === 'progress'
                  : filter === 'closed'
                    ? task[1].status === 'closed'
                    : !filter
                      ? !filter
                      : true,
            );
          }
          if (searchFilter) {
            sorted = sorted.filter((task) =>
              task[1].title.toLowerCase().includes(searchFilter.toLowerCase()),
            );
          }

          return sorted;
        }),
      ),
    ),
  );

  getPositionRank(status: string): number {
    switch (status) {
      case 'open':
        return 1;
      case 'progress':
        return 2;
      case 'closed':
        return 3;
      default:
        return 4;
    }
  }

  changeListFilter(filter: string) {
    this.listFilter$.next(filter);
  }

  changeSearchFilter() {
    this.searchFilter$.next(this.searchFilter);
  }
}
