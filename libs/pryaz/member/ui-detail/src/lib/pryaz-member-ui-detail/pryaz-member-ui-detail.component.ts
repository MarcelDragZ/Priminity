import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  Member,
  MemberInterface,
  TeamMember,
  TeamMemberInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';

@Component({
  selector: 'priminity-pryaz-member-ui-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, PryazSharedHeadlineComponent],
  template: `
    <div class="flex items-center">
      <priminity-pryaz-shared-headline
        *ngIf="!editToggleMember"
        [title]="specificMember?.userName + ' | ' + specificMember?.name"
      />

      <div
        *ngIf="editToggleMember"
        class="flex flex-col items-center m-5 w-1/4 text-white"
      >
        <input
          class="bg-transparent w-full p-2 border-b-2 border-userColor rounded mt-2 mb-2"
          type="text"
          name="editMember.userName"
          [(ngModel)]="editMember.userName"
        />
        <input
          class="bg-transparent w-full p-2 border-b-2 border-userColor rounded mt-2 mb-2"
          type="text"
          name="editMember.name"
          [(ngModel)]="editMember.name"
        />
      </div>

      <span
        *ngIf="!editToggleMember"
        [ngClass]="
          specificMember?.memberState === 'member'
            ? 'bg-green-600'
            : specificMember?.memberState === 'trial'
              ? 'bg-blue-600'
              : specificMember?.memberState === 'verified'
                ? 'bg-orange-600'
                : 'bg-red-600'
        "
        class="p-0.5 rounded text-white"
        >{{
          specificMember?.memberState === 'member'
            ? 'Member'
            : specificMember?.memberState === 'trial'
              ? 'Trial'
              : specificMember?.memberState === 'verified'
                ? 'Verifiziert'
                : 'Gebannt'
        }}</span
      >
    </div>

    <div class="flex m-5 mt-0">
      <div>
        <button
          *ngIf="editToggleMember"
          class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="saveEditMember()"
        >
          Speichern
        </button>
      </div>
      <div>
        <button
          *ngIf="editToggleMember"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="toggleEditMember()"
        >
          Abbrechen
        </button>
      </div>
      <div>
        <button
          *ngIf="!editToggleMember"
          class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="toggleEditMember()"
        >
          Member Bearbeiten
        </button>
      </div>
      <div class="flex flex-col">
        <button
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="toggleEditStatus()"
        >
          {{ editToggleStatus ? 'Abbrechen' : 'Status bearbeiten' }}
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'verified'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="editStatus('trial')"
        >
          Neue Trialphase
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'member'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="editStatus('leaved')"
        >
          Clan verlassen
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'trial'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="editStatus('accepted')"
        >
          Annehmen
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'trial'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="editStatus('extended')"
        >
          Verlängern
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'trial'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all mb-2"
          (click)="editStatus('rejected')"
        >
          Ablehnen
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState !== 'banned'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="editStatus('banned')"
        >
          Bannen
        </button>
        <button
          *ngIf="editToggleStatus && specificMember?.memberState === 'banned'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="editStatus('unbanned')"
        >
          Entbannen
        </button>
      </div>
      <div>
        <button
          *ngIf="specificTeamMember![1].position === 'Admin'"
          class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
          (click)="editStatus('delete')"
        >
          Löschen
        </button>
      </div>
    </div>

    <div class="w-full border-b-2 border-userColor mb-5 mt-5"></div>

    <div class="flex flex-col xl:flex-row justify-start m-5 text-white">
      <div class="flex flex-col w-full xl:w-1/2">
        <span class="text-userColor font-bold mb-5">Details</span>

        <div *ngIf="!editToggleMember" class="flex flex-col">
          <span>Alter:</span>
          <span class="mb-4">{{ editMember.age }}</span>
        </div>
        <div *ngIf="editToggleMember" class="flex flex-col">
          <span>Alter:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.age"
            [(ngModel)]="editMember.age"
          />
        </div>

        <div *ngIf="!editToggleMember" class="flex flex-col">
          <span>Bundesland:</span>
          <span class="mb-4">{{ editMember.countryState }}</span>
        </div>
        <div *ngIf="editToggleMember" class="flex flex-col">
          <span>Bundesland:</span>
          <select
            class="bg-userColor w-2/3 text-white rounded p-1 mb-4"
            [(ngModel)]="editMember.countryState"
          >
            <option selected value="{{ editMember.countryState }}">
              {{ editMember.countryState }}
            </option>
            <option
              *ngIf="editMember.countryState !== 'Baden-Württemberg'"
              value="Baden-Württemberg"
            >
              Baden-Württemberg
            </option>
            <option *ngIf="editMember.countryState !== 'Bayern'" value="Bayern">
              Bayern
            </option>
            <option *ngIf="editMember.countryState !== 'Berlin'" value="Berlin">
              Berlin
            </option>
            <option
              *ngIf="editMember.countryState !== 'Brandenburg'"
              value="Brandenburg"
            >
              Brandenburg
            </option>
            <option *ngIf="editMember.countryState !== 'Bremen'" value="Bremen">
              Bremen
            </option>
            <option *ngIf="editMember.countryState !== 'Hessen'" value="Hessen">
              Hessen
            </option>
            <option
              *ngIf="editMember.countryState !== 'Hamburg'"
              value="Hamburg"
            >
              Hamburg
            </option>
            <option
              *ngIf="editMember.countryState !== 'Mecklenburg-Vorpommern'"
              value="Mecklenburg-Vorpommern"
            >
              Mecklenburg-Vorpommern
            </option>
            <option
              *ngIf="editMember.countryState !== 'Niedersachsen'"
              value="Niedersachsen"
            >
              Niedersachsen
            </option>
            <option
              *ngIf="editMember.countryState !== 'Nordrhein-Westfalen'"
              value="Nordrhein-Westfalen"
            >
              Nordrhein-Westfalen
            </option>
            <option
              *ngIf="editMember.countryState !== 'Rheinland-Pfalz'"
              value="Rheinland-Pfalz"
            >
              Rheinland-Pfalz
            </option>
            <option
              *ngIf="editMember.countryState !== 'Saarland'"
              value="Saarland"
            >
              Saarland
            </option>
            <option
              *ngIf="editMember.countryState !== 'Sachsen'"
              value="Sachsen"
            >
              Sachsen
            </option>
            <option
              *ngIf="editMember.countryState !== 'Sachsen-Anhalt'"
              value="Sachsen-Anhalt"
            >
              Sachsen-Anhalt
            </option>
            <option
              *ngIf="editMember.countryState !== 'Schleswig-Holstein'"
              value="Schleswig-Holstein"
            >
              Schleswig-Holstein
            </option>
            <option
              *ngIf="editMember.countryState !== 'Thüringen'"
              value="Thüringen"
            >
              Thüringen
            </option>
            <option
              *ngIf="editMember.countryState !== 'Österreich'"
              value="Österreich"
            >
              Österreich
            </option>
            <option
              *ngIf="editMember.countryState !== 'Schweiz'"
              value="Schweiz"
            >
              Schweiz
            </option>
          </select>
        </div>

        <div class="flex flex-col">
          <span>Verifiziert seit:</span>
          <span class="mb-4">{{
            timestamp.getDateFromTimestamp(specificMember!.createdTime)
          }}</span>
        </div>

        <div class="flex flex-col">
          <span>Erstellt von:</span>
          <span class="mb-4">{{
            teamMember.getNameById(specificMember!.creatorId) | async
          }}</span>
        </div>

        <div *ngIf="!editToggleMember" class="flex flex-col">
          <span>Steam:</span>
          <a
            target="_blank"
            class="mb-4 break-all decoration-slate-400 text-blue-500"
            href="{{ editMember.steamLink }}"
            >{{ editMember.steamLink }}</a
          >
        </div>
        <div *ngIf="editToggleMember" class="flex flex-col">
          <span>Steam:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.steamLink"
            [(ngModel)]="editMember.steamLink"
          />
        </div>

        <div *ngIf="!editToggleMember" class="flex flex-col">
          <span>TeamSpeak Id:</span>
          <span class="mb-4">{{ editMember.tsId }}</span>
        </div>
        <div *ngIf="editToggleMember" class="flex flex-col">
          <span>TeamSpeak Id:</span>
          <input
            class="bg-transparent border-b-2 border-userColor w-2/3 rounded mt-2 mb-4"
            type="text"
            name="editTeamMember.tsId"
            [(ngModel)]="editMember.tsId"
          />
        </div>

        <div *ngIf="!editToggleMember" class="flex flex-col">
          <span>Infos:</span>
          <pre class="mb-4 whitespace-pre-line break-all">{{
            editMember.info
          }}</pre>
        </div>
        <div *ngIf="editToggleMember" class="flex flex-col">
          <span>Infos:</span>
          <textarea
            class="w-2/3 h-52 mt-2 rounded border-userColor border-2 bg-transparent ng-untouched ng-pristine ng-valid"
            type="text"
            name="editTeamMember.info"
            [(ngModel)]="editMember.info"
          ></textarea>
        </div>
      </div>

      <div class="flex flex-col w-full xl:w-1/2">
        <span class="text-userColor font-bold mb-5">Trial-Status</span>

        <div class="flex flex-col">
          <span>Trial-Status:</span>
          <span class="mb-4">{{
            editMember.trialState?.type === '-'
              ? '-'
              : editMember.trialState?.type === 'trial'
                ? 'Trialphase'
                : editMember.trialState?.type === 'accepted'
                  ? 'Angenommen'
                  : editMember.trialState?.type === 'extended'
                    ? 'Verlängert'
                    : editMember.trialState?.type === 'rejected'
                      ? 'Abgelehnt'
                      : editMember.trialState?.type === 'leaved'
                        ? 'Verlassen'
                        : editMember.trialState?.type === 'banned'
                          ? 'Gebannt'
                          : editMember.trialState?.type === 'unbanned'
                            ? 'Entbannt'
                            : ''
          }}</span>
        </div>

        <div class="flex flex-col">
          <span
            >{{
              editMember.trialState?.type === '-'
                ? 'Erstellt am'
                : editMember.trialState?.type === 'trial'
                  ? 'Trialanfang'
                  : editMember.trialState?.type === 'accepted'
                    ? 'Akzeptiert am'
                    : editMember.trialState?.type === 'extended'
                      ? 'Verlängert am'
                      : editMember.trialState?.type === 'rejected'
                        ? 'Abgelehnt am'
                        : editMember.trialState?.type === 'leaved'
                          ? 'Verlassen am'
                          : editMember.trialState?.type === 'banned'
                            ? 'Gebannt am'
                            : editMember.trialState?.type === 'unbanned'
                              ? 'Entbannt am'
                              : ''
            }}:</span
          >
          <span class="mb-4">{{
            timestamp.getDateFromTimestamp(
              editMember.trialState!.typeChangeTime
            )
          }}</span>
        </div>

        <div *ngIf="editMember.trialState?.trialEndTime" class="flex flex-col">
          <span>Trialende:</span>
          <span class="mb-4">{{
            timestamp.getDateFromTimestamp(editMember.trialState!.trialEndTime)
          }}</span>
        </div>

        <div class="flex flex-col">
          <span>Trialphasen:</span>
          <span class="mb-4">{{ editMember.trialState?.trialPhases }}</span>
        </div>

        <div
          *ngIf="editMember.trialState!.trialPhasesExtended >= 1"
          class="flex flex-col"
        >
          <span>Trialphase verlängert:</span>
          <span class="mb-4">{{
            editMember.trialState?.trialPhasesExtended
          }}</span>
        </div>

        <div
          *ngIf="
            editMember.trialState!.type === 'extended' ||
            editMember.trialState!.type === 'rejected' ||
            editMember.trialState!.type === 'leaved' ||
            editMember.trialState!.type === 'banned'
          "
          class="flex flex-col"
        >
          <span>Grund:</span>
          <span class="mb-4">{{ editMember.trialState?.reason }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-start m-5 text-white">
      <div class="flex flex-col w-full xl:w-1/2">
        <span class="text-userColor font-bold mb-5">Cs2 Infos</span>

        <div class="flex flex-col">
          <span>Cs2 Rang:</span>
          <span class="mb-4">{{ editMember.rank }}</span>
        </div>

        <div class="flex flex-col">
          <span>Faceit Rang:</span>
          <span class="mb-4">{{ editMember.faceitRank }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMemberUiDetailComponent {
  member = new Member();
  teamMember = new TeamMember();
  timestamp = new Timestamp();

  @Input() specificTeamMember!: [string, TeamMemberInterface] | null;
  @Input() memberId!: string | null;
  @Input() set specificMember(value: MemberInterface | null) {
    this._specificMember = value;
    if (value && !this.editToggleMember) {
      this.editMember = {
        userName: value.userName,
        name: value.name,
        age: value.age,
        countryState: value.countryState,
        steamLink: value.steamLink,
        rank: value.rank,
        faceitRank: value.faceitRank,
        tsId: value.tsId,
        info: value.info,
        trialState: {
          type: value.trialState.type,
          typeChangeTime: value.trialState.typeChangeTime,
          trialEndTime: value.trialState.trialEndTime
            ? value.trialState.trialEndTime
            : null,
          trialPhases: value.trialState.trialPhases,
          trialPhasesExtended: value.trialState.trialPhasesExtended,
          reason: value.trialState.reason,
        },
      };
    }
  }
  get specificMember(): MemberInterface | null {
    return this._specificMember;
  }
  @Output() dialogEvents = new EventEmitter<string>();
  @Output() editSaveMember = new EventEmitter<Partial<MemberInterface>>();

  _specificMember!: MemberInterface | null;
  editMember: Partial<MemberInterface> = {};

  editToggleMember = false;
  editToggleStatus = false;

  async saveEditMember() {
    this.toggleEditMember();
    this.editSaveMember.emit(this.editMember);
  }

  toggleEditMember() {
    if (this.editToggleMember) {
      this.editToggleMember = false;
    } else {
      this.editToggleMember = true;
    }
  }

  toggleEditStatus() {
    if (this.editToggleStatus) {
      this.editToggleStatus = false;
    } else {
      this.editToggleStatus = true;
    }
  }

  editStatus(status: string) {
    this.editToggleStatus = false;
    if (status === 'trial') {
      this.dialogEvents.emit(status);
    }

    if (status === 'leaved') {
      this.dialogEvents.emit(status);
    }

    if (status === 'accepted') {
      this.dialogEvents.emit(status);
    }

    if (status === 'extended') {
      this.dialogEvents.emit(status);
    }

    if (status === 'rejected') {
      this.dialogEvents.emit(status);
    }

    if (status === 'banned') {
      this.dialogEvents.emit(status);
    }

    if (status === 'unbanned') {
      this.dialogEvents.emit(status);
    }

    if (status === 'delete') {
      this.dialogEvents.emit(status);
    }
  }
}
