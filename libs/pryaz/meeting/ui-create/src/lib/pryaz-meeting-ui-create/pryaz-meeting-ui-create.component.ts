import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MeetingInterface } from '@priminity/shared/environments/classes';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { PryazSharedQuillTextComponent } from '@priminity/pryaz/shared/quill-text';

@Component({
  selector: 'priminity-pryaz-meeting-ui-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazSharedQuillTextComponent,
  ],
  template: `
    <div class="flex flex-col">
      <priminity-pryaz-shared-headline [title]="'Besprechung erstellen'" />
      <div class="flex items-center justify-between">
        <div class="flex items-center  w-1/2">
          <input
            class="bg-transparent text-white w-full p-2 m-5 border-b-2 border-userColor rounded mt-2 mb-4"
            type="text"
            name="editMeeting.title"
            [(ngModel)]="newMeeting.title"
          />
          <div>
            <select
              name="editMeeting.status"
              class="bg-userColor text-white rounded p-1 cursor-pointer"
              [(ngModel)]="newMeeting.status"
            >
              <option selected value="open">Offen</option>
              <option value="progress">In Bearbeitung</option>
              <option value="closed">Abgeschlossen</option>
            </select>
            <input
              class="mt-2 p-0.5 bg-transparent text-white mb-2 w-full border-b-2 border-userColor rounded "
              type="date"
              [(ngModel)]="newMeeting.meetingTime"
              name="editMeeting.meetingTime"
            />
          </div>
        </div>
        <div class="m-5">
          <button
            class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
            (click)="createMeeting()"
          >
            Besprechung erstellen
          </button>
          <button
            class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
            (click)="setValuesToDefault()"
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>

    <div class="w-full">
      <priminity-pryaz-shared-quill-text
        [text]="newMeeting.description"
        (textField)="updateMeetingDescription($event)"
      />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazMeetingUiCreateComponent {
  @Output() saveCreateMeeting = new EventEmitter<MeetingInterface>();

  newMeeting: MeetingInterface = {
    title: '',
    description: '',
    status: 'open',
    creatorId: '',
    createdTime: null,
    meetingTime: null,
  };

  async createMeeting() {
    this.saveCreateMeeting.emit(this.newMeeting);
    this.setValuesToDefault();
  }

  setValuesToDefault() {
    this.newMeeting = {
      title: '',
      description: '',
      status: 'open',
      creatorId: '',
      createdTime: null,
      meetingTime: null,
    };
  }

  updateMeetingDescription(text: string) {
    this.newMeeting.description = text;
  }
}
