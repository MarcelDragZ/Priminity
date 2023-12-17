import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import {
  TaskInterface,
  TeamMemberInterface,
} from '@priminity/shared/environments/classes';
import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { FormsModule } from '@angular/forms';
import { PryazSharedQuillTextComponent } from '@priminity/pryaz/shared/quill-text';
@Component({
  selector: 'priminity-pryaz-task-ui-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazSharedQuillTextComponent,
  ],
  template: `
    <div class="flex items-center">
      <priminity-pryaz-shared-headline
        *ngIf="!editToggleTask"
        [title]="specificTask?.title"
      />

      <div
        *ngIf="editToggleTask"
        class="flex items-center m-5 w-1/4  text-white"
      >
        <input
          class="bg-transparent w-full p-2 border-b-2 border-userColor rounded mt-2 mb-4"
          type="text"
          name="editTask.title"
          [(ngModel)]="editTask.title"
        />
      </div>

      <span
        *ngIf="!editToggleTask"
        [ngClass]="
          specificTask?.status === 'open'
            ? 'bg-blue-600'
            : specificTask?.status === 'progress'
              ? 'bg-orange-600'
              : specificTask?.status === 'closed'
                ? 'bg-green-600'
                : 'bg-blue-600'
        "
        class="p-0.5 rounded text-white"
        >{{
          specificTask?.status === 'open'
            ? 'Offen'
            : specificTask?.status === 'progress'
              ? 'In Bearbeitung'
              : specificTask?.status === 'closed'
                ? 'Abgeschlossen'
                : 'Offen'
        }}</span
      >
      <select
        *ngIf="editToggleTask"
        name="editTask.status"
        class="bg-userColor text-white rounded p-1 cursor-pointer"
        [(ngModel)]="editTask.status"
      >
        <option selected value="{{ editTask.status }}">
          {{
            editTask.status === 'open'
              ? 'Offen'
              : editTask.status === 'progress'
                ? 'In Bearbeitung'
                : editTask.status === 'closed'
                  ? 'Abgeschlossen'
                  : 'Offen'
          }}
        </option>
        <option *ngIf="editTask.status !== 'open'" value="open">Offen</option>
        <option *ngIf="editTask.status !== 'progress'" value="progress">
          In Bearbeitung
        </option>
        <option *ngIf="editTask.status !== 'closed'" value="closed">
          Abgeschlossen
        </option>
      </select>
    </div>

    <div class="m-5 mt-0">
      <button
        *ngIf="editToggleTask"
        class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="saveEditTask()"
      >
        Speichern
      </button>
      <button
        *ngIf="editToggleTask"
        class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="toggleEditTask()"
      >
        Abbrechen
      </button>
      <button
        *ngIf="!editToggleTask"
        class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="toggleEditTask()"
      >
        Aufgabe Bearbeiten
      </button>
      <button
        *ngIf="specificTeamMember![1].position === 'Admin'"
        class="bg-userColor ml-2 p-1 text-white rounded hover:opacity-80 transition-all"
        (click)="dialogDelete()"
      >
        Aufgabe Löschen
      </button>
    </div>

    <div
      *ngIf="!editToggleTask"
      class="w-full border-b-2 border-userColor mb-5 mt-5"
    ></div>

    <div class="w-full">
      <priminity-pryaz-shared-quill-text
        *ngIf="editToggleTask"
        [text]="editTask.description"
        (textField)="updateTaskDescription($event)"
      />
    </div>

    <p
      *ngIf="!editToggleTask"
      class="m-5 mt-10"
      [innerHTML]="sanitizedHtml"
    ></p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTaskUiDetailComponent {
  sanitizer: DomSanitizer = inject(DomSanitizer);

  @Input() specificTeamMember!: [string, TeamMemberInterface] | null;
  @Input() set specificTask(value: TaskInterface | null) {
    this._specificTask = value;
    if (value && !this.editToggleTask) {
      this.editTask = {
        title: value.title,
        status: value.status,
        description: value.description,
      };
    }
  }
  get specificTask(): TaskInterface | null {
    return this._specificTask;
  }
  @Output() dialogDeleteTask = new EventEmitter<boolean>();
  @Output() editSaveTask = new EventEmitter<Partial<TaskInterface>>();

  _specificTask!: TaskInterface | null;
  editTask: Partial<TaskInterface> = {};

  editToggleTask = false;

  get sanitizedHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.specificTask?.description || '',
    );
  }

  dialogDelete() {
    this.dialogDeleteTask.emit();
  }

  async saveEditTask() {
    this.toggleEditTask();
    this.editSaveTask.emit(this.editTask);
  }

  toggleEditTask() {
    if (this.editToggleTask) {
      this.editToggleTask = false;
    } else {
      this.editToggleTask = true;
    }
  }

  updateTaskDescription(text: string) {
    this.editTask.description = text;
  }
}
