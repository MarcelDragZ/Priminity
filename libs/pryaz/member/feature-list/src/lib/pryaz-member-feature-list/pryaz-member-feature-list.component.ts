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

import { PryazMemberUiListComponent } from '@priminity/pryaz/member/ui-list';
import {
  Member,
  MemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';

@Component({
  selector: 'priminity-pryaz-member-feature-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PryazMemberUiListComponent,
    PryazSharedHeadlineComponent,
  ],
  template: `<priminity-pryaz-shared-headline [title]="'Member Liste'" />
    <a
      [routerLink]="['/member/create']"
      class="ml-5 bg-userColor p-1 text-white rounded hover:opacity-80 transition-all cursor-pointer"
    >
      Member erstellen
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
          (click)="changeListFilter('member')"
          [ngClass]="
            (listFilter$ | async) === 'member'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-24 pb-2 text-center transition-all"
        >
          Member
        </div>
        <div
          (click)="changeListFilter('trial')"
          [ngClass]="
            (listFilter$ | async) === 'trial'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-16 pb-2 text-center transition-all"
        >
          Trial
        </div>
        <div
          (click)="changeListFilter('verified')"
          [ngClass]="
            (listFilter$ | async) === 'verified'
              ? 'border-userColor'
              : 'border-neutral-500'
          "
          class="border-opacity-20 border-b-2 w-24 pb-2 text-center transition-all"
        >
          Verifiziert
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

    <priminity-pryaz-member-ui-list
      [memberList]="memberList$ | async"
      [listFilter]="listFilter$ | async"
      (sortFilter)="sortListFilter($event)"
    /> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberFeatureListComponent {
  member = new Member();

  sortFilter = '';
  searchFilter = '';

  sortFilter$ = new BehaviorSubject<string>('');
  listFilter$ = new BehaviorSubject<string>('all');
  searchFilter$ = new BehaviorSubject<string>('');

  memberList$: Observable<[string, MemberInterface][]> = combineLatest([
    this.sortFilter$,
    this.listFilter$,
    this.searchFilter$,
  ]).pipe(
    switchMap(([sort, filter, searchFilter]) =>
      this.member.getItems$().pipe(
        map((members) => {
          let sorted = Object.entries(members ?? {}).sort((a, b) => {
            const stateDiff =
              this.getPositionRank(a[1].memberState) -
              this.getPositionRank(b[1].memberState);

            return sort === 'trialEndTime'
              ? stateDiff ||
                  a[1].trialState.trialEndTime - b[1].trialState.trialEndTime
              : sort === 'createdTime'
                ? stateDiff || a[1].createdTime - b[1].createdTime
                : stateDiff;
          });

          if (filter !== 'all') {
            sorted = sorted.filter((member) =>
              filter === 'member'
                ? member[1].memberState === 'member'
                : filter === 'trial'
                  ? member[1].memberState === 'trial'
                  : filter === 'verified'
                    ? member[1].memberState === 'verified'
                    : !filter
                      ? !filter
                      : true,
            );
          }
          if (searchFilter) {
            sorted = sorted.filter(
              (member) =>
                member[1].userName
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].name
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].steamLink
                  .toLowerCase()
                  .includes(searchFilter.toLowerCase()) ||
                member[1].tsId
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
      case 'member':
        return 1;
      case 'trial':
        return 2;
      case 'verified':
        return 3;
      default:
        return 4;
    }
  }

  sortListFilter(sort: string) {
    this.sortFilter$.next(sort);
  }

  changeListFilter(filter: string) {
    this.listFilter$.next(filter);
  }

  changeSearchFilter() {
    this.searchFilter$.next(this.searchFilter);
  }
}
