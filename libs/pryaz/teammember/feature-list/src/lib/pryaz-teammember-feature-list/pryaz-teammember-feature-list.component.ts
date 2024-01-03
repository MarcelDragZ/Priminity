import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  map,
  switchMap,
} from 'rxjs';

import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import {
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazTeammemberUiListComponent } from '@priminity/pryaz/teammember/ui-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'priminity-pryaz-teammember-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazTeammemberUiListComponent,
  ],
  template: `<priminity-pryaz-shared-headline
      [title]="'Teammitglieder Liste'"
    />
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
          (click)="changeListFilter('activated')"
          [ngClass]="
            (listFilter$ | async) === 'activated'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-24 pb-2 text-center transition-all"
        >
          Aktivierte
        </div>
        <div
          (click)="changeListFilter('deactivated')"
          [ngClass]="
            (listFilter$ | async) === 'deactivated'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-24 pb-2 text-center transition-all"
        >
          Deaktivierte
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

    <priminity-pryaz-teammember-ui-list
      [teamMemberList]="teamMemberList$ | async"
      [memberList]="memberList$ | async"
    /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberFeatureListComponent {
  teamMember = new TeamMember();
  member = new Member();

  searchFilter = '';

  listFilter$ = new BehaviorSubject<string>('all');
  searchFilter$ = new BehaviorSubject<string>('');

  memberList$: Observable<[string, MemberInterface][]> = this.member
    .getItems$()
    .pipe(
      map((members) => {
        return Object.entries(members ?? {});
      }),
    );

  teamMemberList$: Observable<[string, TeamMemberInterface][]> = combineLatest([
    this.listFilter$,
    this.searchFilter$,
  ]).pipe(
    switchMap(([filter, searchFilter]) =>
      this.teamMember.getItems$().pipe(
        map((teamMembers) => {
          let sorted = Object.entries(teamMembers ?? {}).sort((a, b) => {
            return (
              b[1].active - a[1].active ||
              this.getPositionRank(a[1].position) -
                this.getPositionRank(b[1].position)
            );
          });
          if (filter !== 'all') {
            sorted = sorted.filter((member) =>
              filter === 'activated'
                ? member[1].active
                : filter === 'deactivated'
                  ? !member[1].active
                  : true,
            );
          }
          if (searchFilter) {
            sorted = sorted.filter(
              (member) =>
                member[1].name
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].userName
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].position
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].email
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].steamLink
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()),
            );
          }

          return sorted;
        }),
      ),
    ),
  );

  getPositionRank(position: string): number {
    switch (position) {
      case 'Admin':
        return 1;
      case 'Supervisor':
        return 2;
      case 'Head-Mod':
        return 3;
      case 'Manager':
        return 4;
      case 'Mod':
        return 5;
      case 'Trial-Mod':
        return 6;
      default:
        return 7;
    }
  }

  changeListFilter(filter: string) {
    this.listFilter$.next(filter);
  }

  changeSearchFilter() {
    this.searchFilter$.next(this.searchFilter);
  }
}
