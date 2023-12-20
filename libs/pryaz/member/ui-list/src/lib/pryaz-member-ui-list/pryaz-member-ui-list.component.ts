import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  MemberInterface,
  TeamMember,
  Timestamp,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-member-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<table class="w-full text-white ">
    <tr
      class="bg-neutral-900 h-10 border-b-userColor border-opacity-30 border-b-2"
    >
      <td class="pl-5">Nr.</td>
      <td>Member</td>
      <td class="hidden sm:table-cell">Erstellt von</td>
      <td
        class="hidden sm:table-cell cursor-pointer"
        (click)="sortList('createdTime')"
      >
        <span class="flex"
          >Verifiziert seit
          <img class="w-3 img-color ml-2" src="/assets/img/arrow-up-down.png"
        /></span>
      </td>
      <td
        class="cursor-pointer"
        *ngIf="listFilter === 'trial'"
        (click)="sortList('trialEndTime')"
      >
        <span class="flex"
          >Trial Ende
          <img class="w-3 img-color ml-2" src="/assets/img/arrow-up-down.png"
        /></span>
      </td>
      <td class="hidden xl:table-cell">Steam</td>
      <td>Status</td>
    </tr>

    <ng-container *ngFor="let member of memberList; let i = index">
      <tr
        (click)="editTask(member[0])"
        class="h-9 border-b-neutral-900 border-b-2 border-opacity-80 cursor-pointer hover:bg-neutral-900 transition-all"
      >
        <td class="pl-5">{{ i + 1 }}</td>
        <td>{{ member[1].userName }} | {{ member[1].name }}</td>
        <td class="hidden sm:table-cell">
          {{ teamMember.getNameById(member[1].creatorId) | async }}
        </td>
        <td class="hidden sm:table-cell">
          {{ timestamp.getDateFromTimestamp(member[1].createdTime) }}
        </td>
        <td *ngIf="listFilter === 'trial'">
          {{
            timestamp.getDateFromTimestamp(member[1].trialState.trialEndTime)
          }}
        </td>
        <td class="hidden xl:table-cell">{{ member[1].steamLink }}</td>
        <td>
          <span
            class="p-0.5 rounded"
            [ngClass]="
              member[1].memberState === 'member'
                ? 'bg-green-600'
                : member[1].memberState === 'trial'
                  ? 'bg-blue-600'
                  : member[1].memberState === 'verified'
                    ? 'bg-orange-600'
                    : 'bg-red-600'
            "
          >
            {{
              member[1].memberState === 'member'
                ? 'Member'
                : member[1].memberState === 'trial'
                  ? 'Trial'
                  : member[1].memberState === 'verified'
                    ? 'Verifiziert'
                    : 'Gebannt'
            }}</span
          >
        </td>
      </tr>
    </ng-container>
  </table>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiListComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  testName!: string;

  @Input() memberList!: [string, MemberInterface][] | null;
  @Input() listFilter!: string | null;
  @Output() sortFilter = new EventEmitter<string>();

  timestamp = new Timestamp();
  teamMember = new TeamMember();

  editTask(memberId: string) {
    this.router.navigateByUrl(
      this.router.createUrlTree(['detail', memberId], {
        relativeTo: this.activeRoute.parent,
        queryParamsHandling: 'merge',
        preserveFragment: true,
      }),
    );
  }

  sortList(sort: string) {
    this.sortFilter.emit(sort);
  }
}
