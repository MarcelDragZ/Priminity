import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  DialogActionInterface,
  DialogEventInterface,
} from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-shared-fullscreen-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: ` <div class="absolute top-0 right-0 left-0 bottom-0">
    <div class="bg-black w-full h-full opacity-50"></div>
    <div
      class="flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
    >
      <div
        class="relative flex flex-col w-8/12 h-4/6 pryaz-background-light-gray-100 border-userColor border-2 rounded text-white"
      >
        <div class="flex items-center p-5 h-16 bg-neutral-900">
          {{ dialogEvent.title }}
        </div>

        <div class="m-5">
          Möchtest du {{ dialogEvent.title }} {{ dialogEvent.action }} ?
        </div>

        <!-- OPTIONAL TEXT FELD DYNAMISCH EINBLENDEN -->

        <div
          class="absolute flex items-center justify-end bottom-0 left-0 right-0 h-14 bg-neutral-900 pr-5"
        >
          <button
            (click)="dialogAction(true)"
            class="p-0.5 bg-userColor rounded mr-2 hover:opacity-80 transition-all"
          >
            {{ dialogEvent.action }}
          </button>
          <button
            (click)="dialogAction(false)"
            class="p-0.5 bg-userColor rounded hover:opacity-80 transition-all"
          >
            Zurück
          </button>
        </div>
      </div>
    </div>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazSharedFullscreenDialogComponent {
  @Input() dialogEvent!: DialogEventInterface;

  @Output() emitDialogEvent = new EventEmitter<DialogActionInterface>();

  dialogDescription?: string;

  dialogAction(action: boolean) {
    this.emitDialogEvent.emit({
      action: action,
      description: this.dialogDescription ? this.dialogDescription : '',
    });
  }
}
