import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  MeetingInterface,
  TeamMemberInterface,
  Timestamp,
} from '@priminity/shared/environments/classes';
import { PryazSharedQuillTextComponent } from '@priminity/pryaz/shared/quill-text';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';

@Component({
  selector: 'priminity-pryaz-meeting-ui-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedQuillTextComponent,
    PryazSharedHeadlineComponent,
  ],
  template: `
    <div class="flex flex-col sm:flex-row sm:items-center">
      <priminity-pryaz-shared-headline
        *ngIf="!editToggleMeeting"
        [title]="specificMeeting?.title"
      />
      <div>
        <div
          *ngIf="editToggleMeeting"
          class="flex items-center sm:m-5 mt-5 pl-5 sm:pl-0 pr-5 w-full text-white"
        >
          <input
            class="bg-transparent w-full p-2 border-b-2 border-userColor rounded mt-2 mb-4"
            type="text"
            name="editMeeting.title"
            [(ngModel)]="editMeeting.title"
          />
        </div>

        <span
          *ngIf="!editToggleMeeting"
          [ngClass]="
            specificMeeting?.status === 'open'
              ? 'bg-blue-600'
              : specificMeeting?.status === 'progress'
                ? 'bg-orange-600'
                : specificMeeting?.status === 'closed'
                  ? 'bg-green-600'
                  : 'bg-blue-600'
          "
          class="p-0.5 ml-5 rounded text-white"
          >{{
            specificMeeting?.status === 'open'
              ? 'Offen'
              : specificMeeting?.status === 'progress'
                ? 'In Bearbeitung'
                : specificMeeting?.status === 'closed'
                  ? 'Abgeschlossen'
                  : 'Offen'
          }}</span
        >
      </div>
      <div
        *ngIf="!editToggleMeeting"
        class="flex flex-col items-start ml-5 mt-2 mb-5"
      >
        <div class="text-userColor font-bold">Besprechungsdatum:</div>
        <div class="text-white">
          {{ timestamp.getDateFromTimestamp(specificMeeting!.meetingTime) }}
        </div>
      </div>

      <div class="flex flex-col pl-5 pr-5">
        <select
          *ngIf="editToggleMeeting"
          name="editMeeting.status"
          class="bg-userColor text-white rounded p-1 cursor-pointer"
          [(ngModel)]="editMeeting.status"
        >
          <option selected value="{{ editMeeting.status }}">
            {{
              editMeeting.status === 'open'
                ? 'Offen'
                : editMeeting.status === 'progress'
                  ? 'In Bearbeitung'
                  : editMeeting.status === 'closed'
                    ? 'Abgeschlossen'
                    : 'Offen'
            }}
          </option>
          <option *ngIf="editMeeting.status !== 'open'" value="open">
            Offen
          </option>
          <option *ngIf="editMeeting.status !== 'progress'" value="progress">
            In Bearbeitung
          </option>
          <option *ngIf="editMeeting.status !== 'closed'" value="closed">
            Abgeschlossen
          </option>
        </select>

        <input
          class="mt-2 p-0.5 bg-transparent text-white mb-2 w-full border-b-2 border-userColor rounded "
          *ngIf="editToggleMeeting"
          type="date"
          [(ngModel)]="editMeeting.meetingTime"
        />
      </div>
    </div>

    <div class="m-5 mt-0">
      <button
        *ngIf="editToggleMeeting"
        class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="saveEditMeeting()"
      >
        Speichern
      </button>
      <button
        *ngIf="editToggleMeeting"
        class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="toggleEditMeeting()"
      >
        Abbrechen
      </button>
      <button
        *ngIf="!editToggleMeeting"
        class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="toggleEditMeeting()"
      >
        Besprechung Bearbeiten
      </button>
      <button
        *ngIf="specificTeamMember![1].position === 'Admin'"
        class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="dialogDelete()"
      >
        Löschen
      </button>
    </div>

    <div
      *ngIf="!editToggleMeeting"
      class="w-full border-b-2 border-userColor mb-5 mt-5"
    ></div>

    <div class="w-full">
      <priminity-pryaz-shared-quill-text
        *ngIf="editToggleMeeting"
        [text]="editMeeting.description"
        (textField)="updateMeetingDescription($event)"
      />
    </div>

    <p
      *ngIf="!editToggleMeeting"
      class="m-5 mt-10"
      [innerHTML]="sanitizedHtml"
    ></p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingUiDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);

  timestamp = new Timestamp();

  @Input() specificTeamMember!: [string, TeamMemberInterface] | null;
  @Input() set specificMeeting(value: MeetingInterface | null) {
    this._specificMeeting = value;
    if (value && !this.editToggleMeeting) {
      this.editMeeting = {
        title: value.title,
        status: value.status,
        description: value.description,
        meetingTime: this.timestamp.getIsoDateFromTimestamp(value.meetingTime),
      };
    }
  }
  get specificMeeting(): MeetingInterface | null {
    return this._specificMeeting;
  }
  @Output() dialogDeleteMeeting = new EventEmitter<boolean>();
  @Output() editSaveMeeting = new EventEmitter<Partial<MeetingInterface>>();

  _specificMeeting!: MeetingInterface | null;
  editMeeting: Partial<MeetingInterface> = {};

  editToggleMeeting = false;

  get sanitizedHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.specificMeeting?.description || '',
    );
  }

  editValues() {
    this.editMeeting = {
      title: this.specificMeeting?.title,
      status: this.specificMeeting?.status,
      description: this.specificMeeting?.description,
      meetingTime: this.timestamp.getIsoDateFromTimestamp(
        this.specificMeeting!.meetingTime,
      ),
    };
  }

  dialogDelete() {
    this.dialogDeleteMeeting.emit();
  }

  async saveEditMeeting() {
    this.editSaveMeeting.emit(this.editMeeting);
    this.toggleEditMeeting();
  }

  toggleEditMeeting() {
    if (this.editToggleMeeting) {
      this.editToggleMeeting = false;
      this.editValues();
    } else {
      this.editToggleMeeting = true;
    }
  }

  updateMeetingDescription(text: string) {
    this.editMeeting.description = text;
  }
}
