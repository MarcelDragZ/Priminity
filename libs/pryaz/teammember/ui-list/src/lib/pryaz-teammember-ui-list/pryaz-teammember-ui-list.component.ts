import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MemberInterface,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'priminity-pryaz-teammember-ui-list',
  standalone: true,
  imports: [CommonModule],
  template: `<table class="w-full text-white ">
    <tr
      class="bg-neutral-900 h-10 border-b-userColor border-opacity-30 border-b-2"
    >
      <td class="pl-5">Nr.</td>
      <td>Name</td>
      <td>Position</td>
      <td>E-Mail</td>
      <td>Steam</td>
      <td>Aktiviert</td>
      <td class="w-36 pr-5">Erstellte Member</td>
    </tr>

    <ng-container *ngFor="let teamMember of teamMemberList; let i = index">
      <tr
        (click)="editTeamMember(teamMember[0])"
        class="h-9 border-b-neutral-900 border-b-2 border-opacity-80 cursor-pointer hover:bg-neutral-900 transition-all"
      >
        <td class="pl-5">{{ i + 1 }}</td>
        <td>{{ teamMember[1].name }} {{ teamMember[1].userName }}</td>
        <td>{{ teamMember[1].position }}</td>
        <td>{{ teamMember[1].email }}</td>
        <td>{{ teamMember[1].steamLink }}</td>
        <td>
          <span
            class="rounded p-0.5"
            [ngClass]="teamMember[1].active ? 'bg-green-600' : 'bg-red-600'"
            >{{ teamMember[1].active ? 'Aktiviert' : 'Deaktiviert' }}</span
          >
        </td>
        <td class="w-36 pr-5">{{ getCreatedMemberCount(teamMember[0]) }}</td>
      </tr>
    </ng-container>
  </table>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberUiListComponent {
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  @Input() teamMemberList!: [string, TeamMemberInterface][] | null;
  @Input() memberList!: [string, MemberInterface][] | null;

  getCreatedMemberCount(teamMemberId: string) {
    let createdMembersCount = 0;
    if (this.memberList) {
      this.memberList!.forEach((member) => {
        if (member[1].creatorId === teamMemberId) {
          createdMembersCount++;
        }
      });
    }
    return createdMembersCount;
  }

  editTeamMember(teamMemberId: string) {
    this.router.navigateByUrl(
      this.router.createUrlTree(['detail', teamMemberId], {
        relativeTo: this.activeRoute.parent,
        queryParamsHandling: 'merge',
        preserveFragment: true,
      }),
    );
  }
}
