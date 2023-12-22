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

import { PryazMeetingUiListComponent } from '@priminity/pryaz/meeting/ui-list';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import {
  Meeting,
  MeetingInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-meeting-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PryazMeetingUiListComponent,
    PryazSharedHeadlineComponent,
  ],
  template: `<priminity-pryaz-shared-headline [title]="'Besprechungs Liste'" />
    <a
      [routerLink]="['/meeting/create']"
      class="ml-5 bg-userColor p-1 text-white rounded hover:opacity-80 transition-all cursor-pointer"
    >
      Besprechung erstellen
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

    <priminity-pryaz-meeting-ui-list [meetingList]="meetingList$ | async" /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingFeatureListComponent {
  meeting = new Meeting();

  searchFilter = '';

  listFilter$ = new BehaviorSubject<string>('all');
  searchFilter$ = new BehaviorSubject<string>('');

  meetingList$: Observable<[string, MeetingInterface][]> = combineLatest([
    this.listFilter$,
    this.searchFilter$,
  ]).pipe(
    switchMap(([filter, searchFilter]) =>
      this.meeting.getItems$().pipe(
        map((meetings) => {
          let sorted = Object.entries(meetings ?? {}).sort((a, b) => {
            return (
              this.getPositionRank(a[1].status) -
                this.getPositionRank(b[1].status) ||
              b[1].meetingTime - a[1].meetingTime
            );
          });
          if (filter !== 'all') {
            sorted = sorted.filter((meeting) =>
              filter === 'open'
                ? meeting[1].status === 'open'
                : filter === 'progress'
                  ? meeting[1].status === 'progress'
                  : filter === 'closed'
                    ? meeting[1].status === 'closed'
                    : !filter
                      ? !filter
                      : true,
            );
          }
          if (searchFilter) {
            sorted = sorted.filter((meeting) =>
              meeting[1].title
                .toLowerCase()
                .includes(searchFilter.toLowerCase()),
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
