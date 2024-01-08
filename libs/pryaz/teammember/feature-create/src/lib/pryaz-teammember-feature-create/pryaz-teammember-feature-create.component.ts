import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { PryazTeammemberUiCreateComponent } from '@priminity/pryaz/teammember/ui-create';
import {
  RegCode,
  RegCodeInterface,
  TeamMember,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-teammember-feature-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazTeammemberUiCreateComponent,
  ],
  template: `
    <priminity-pryaz-shared-headline [title]="'Teammitglied erstellen'" />

    <div class="m-5">
      <button
        (click)="toggleSelectDialog(true)"
        class="bg-userColor p-1 text-white rounded"
      >
        Erstelle Reg-Code
      </button>

      <div *ngIf="selectDialog" class="mt-5 ">
        <p *ngIf="noSelectedInput" class="text-red-700">
          Du musst einen Rang wählen !
        </p>
        <select
          class="bg-userColor text-white rounded p-1"
          [(ngModel)]="selectedRank"
        >
          <option
            *ngIf="selectedRank === 'Wähle Rang'"
            selected
            disabled
            value="Wähle Rang"
          >
            Wähle Rang
          </option>
          <option
            *ngIf="activeTeamMember[1].position === 'Admin'"
            value="Admin"
          >
            Admin
          </option>
          <option
            *ngIf="
              activeTeamMember[1].position === 'Admin' ||
              activeTeamMember[1].position === 'Supervisor'
            "
            value="Supervisor"
          >
            Supervisor
          </option>
          <option
            *ngIf="
              activeTeamMember[1].position === 'Admin' ||
              activeTeamMember[1].position === 'Supervisor' ||
              activeTeamMember[1].position === 'Head-Mod'
            "
            value="Head-Mod"
          >
            Head-Mod
          </option>
          <option value="Manager">Manager</option>
          <option value="Mod">Mod</option>
          <option value="Trial-Mod">Trial-Mod</option>
        </select>
        <button
          (click)="createRegCode()"
          class="bg-userColor p-1 text-white rounded ml-5"
        >
          Erstellen
        </button>
        <button
          (click)="toggleSelectDialog(false)"
          class="bg-userColor p-1 text-white rounded ml-5"
        >
          Abbrechen
        </button>
      </div>
    </div>

    <priminity-pryaz-teammember-ui-create
      [regCodeList]="regCodeList$ | async"
      (regCodeDelete)="deleteRegCode($event)"
    />
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberFeatureCreateComponent implements OnDestroy {
  cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  selectDialog = false;
  noSelectedInput = false;
  selectedRank = 'Wähle Rang';
  activeTeamMember!: [string, TeamMemberInterface];

  regCode = new RegCode();
  teamMember = new TeamMember();

  regCodeList$: Observable<[string, RegCodeInterface][]> | null = this.regCode
    .getItems$()
    .pipe(
      map((regCode) => {
        return Object.entries(regCode ?? {});
      }),
    );

  readonly loggedTeamMember$: Observable<[string, TeamMemberInterface]> =
    this.teamMember.syncValidTeamMember() as Observable<
      [string, TeamMemberInterface]
    >;

  loggedTeamMemberSubscription = this.loggedTeamMember$.subscribe((data) => {
    this.activeTeamMember = data;
  });

  ngOnDestroy(): void {
    this.loggedTeamMemberSubscription.unsubscribe();
  }

  createRegCode() {
    if (this.selectedRank === 'Wähle Rang') {
      this.noSelectedInput = true;
      setTimeout(() => {
        this.noSelectedInput = false;
        this.cdRef.detectChanges();
      }, 2500);
    } else {
      this.regCode.setRegCode(this.selectedRank);
      this.toggleSelectDialog(false);
    }
  }

  deleteRegCode(key: string) {
    this.regCode.deleteItem(key);
  }

  toggleSelectDialog(value: boolean) {
    if (this.selectDialog) {
      this.selectedRank = 'Wähle Rang';
    }
    this.selectDialog = value;
  }
}
