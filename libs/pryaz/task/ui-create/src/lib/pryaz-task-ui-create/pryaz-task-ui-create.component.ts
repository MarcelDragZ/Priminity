import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PryazSharedHeadlineComponent } from '@priminity/pryaz/shared/headline';
import { TaskInterface } from '@priminity/shared/environments/classes';
import { PryazSharedQuillTextComponent } from '@priminity/pryaz/shared/quill-text';


@Component({
  selector: 'priminity-pryaz-task-ui-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PryazSharedHeadlineComponent,
    PryazSharedQuillTextComponent,
  ],
  template: `
    <div class="flex flex-col">
      <priminity-pryaz-shared-headline [title]="'Aufgabe erstellen'" />
      <div class="flex items-center justify-between">
        <div class="flex items-center  w-1/2">
          <input
            class="bg-transparent text-white w-full p-2 m-5 border-b-2 border-userColor rounded mt-2 mb-4"
            type="text"
            name="editTask.title"
            [(ngModel)]="newTask.title"
          />

          <select
            name="editTask.status"
            class="bg-userColor text-white rounded p-1 cursor-pointer"
            [(ngModel)]="newTask.status"
          >
            <option selected value="open">Offen</option>
            <option value="progress">In Bearbeitung</option>
            <option value="closed">Abgeschlossen</option>
          </select>
        </div>
        <div class="m-5">
          <button
            class="bg-userColor p-1 text-white rounded hover:opacity-80 transition-all"
            (click)="createTask()"
          >
            Aufgabe erstellen
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
        [text]="newTask.description"
        (textField)="updateTaskDescription($event)"
      />
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTaskUiCreateComponent {
  @Output() saveCreateTask = new EventEmitter<TaskInterface>();

  newTask: TaskInterface = {
    title: '',
    description: '',
    status: 'open',
    creatorId: '',
    createdTime: null,
  };

  async createTask() {
    this.saveCreateTask.emit(this.newTask);
    this.setValuesToDefault();
  }

  setValuesToDefault() {
    this.newTask = {
      title: '',
      description: '',
      status: 'open',
      creatorId: '',
      createdTime: null,
    };
  }

  updateTaskDescription(text: string) {
    this.newTask.description = text;
  }
}
