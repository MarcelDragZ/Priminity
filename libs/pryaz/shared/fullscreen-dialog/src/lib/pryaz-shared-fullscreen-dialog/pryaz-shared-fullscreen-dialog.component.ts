import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CommentInterface,
  DialogActionInterface,
  DialogEventInterface,
  TeamMember,
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
          Möchtest du {{ dialogEvent.title }}
          {{
            dialogEvent.action === 'trial'
              ? 'zur neuen Trialphase hinzufügen ?'
              : dialogEvent.action === 'leaved'
                ? 'aus dem Clan austragen ?'
                : dialogEvent.action === 'accepted'
                  ? 'als Member annehmen ?'
                  : dialogEvent.action === 'extended'
                    ? 'Trialphase verlängern ?'
                    : dialogEvent.action === 'rejected'
                      ? 'als Member ablehnen ?'
                      : dialogEvent.action === 'banned'
                        ? 'bannen ?'
                        : dialogEvent.action === 'unbanned'
                          ? 'entbannen ?'
                          : dialogEvent.action === 'delete'
                            ? 'löschen ?'
                            : dialogEvent.action === 'edit'
                              ? 'bearbeiten ?'
                              : ''
          }}
        </div>

        <div
          *ngIf="dialogEvent.action === 'delete' && specificInput"
          class="flex flex-col justify-start items-center w-full h-2/3 m-5 mt-0"
        >
          <div class="w-full">
            Kommentar von
            {{ teamMember.getNameById(specificInput[1]!.creatorId) | async }}
          </div>

          <textarea
            disabled
            class="w-2/3 h-2/3 rounded border-userColor border-2 bg-transparent mt-2"
            type="text"
            name="dialogDescription"
            [(ngModel)]="dialogDescription"
          ></textarea>
        </div>

        <div
          *ngIf="
            dialogEvent.action === 'leaved' ||
            dialogEvent.action === 'extended' ||
            dialogEvent.action === 'rejected' ||
            dialogEvent.action === 'banned' ||
            dialogEvent.action === 'edit'
          "
          class="flex flex-col justify-start items-center w-full h-2/3 m-5 mt-0"
        >
          <div class="w-full">
            {{ dialogEvent.action === 'edit' ? 'Bearbeiten:' : 'Grund:' }}
          </div>

          <textarea
            class="w-2/3 h-2/3 rounded border-userColor border-2 bg-transparent"
            type="text"
            name="dialogDescription"
            [(ngModel)]="dialogDescription"
          ></textarea>
        </div>

        <div
          class="absolute flex items-center justify-end bottom-0 left-0 right-0 h-14 bg-neutral-900 pr-5"
        >
          <button
            (click)="dialogAction(dialogEvent.action)"
            class="p-0.5 bg-userColor rounded mr-2 hover:opacity-80 transition-all"
          >
            {{
              dialogEvent.action === 'trial'
                ? 'Neue Trialphase'
                : dialogEvent.action === 'leaved'
                  ? 'Verlassen'
                  : dialogEvent.action === 'accepted'
                    ? 'Akzeptieren'
                    : dialogEvent.action === 'extended'
                      ? 'Verlängern'
                      : dialogEvent.action === 'rejected'
                        ? 'Ablehnen'
                        : dialogEvent.action === 'banned'
                          ? 'Bannen'
                          : dialogEvent.action === 'unbanned'
                            ? 'Entbannen'
                            : dialogEvent.action === 'delete'
                              ? 'Löschen'
                              : dialogEvent.action === 'edit'
                                ? 'Bearbeiten'
                                : ''
            }}
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
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazSharedFullscreenDialogComponent implements OnInit, OnDestroy {
  renderer: Renderer2 = inject(Renderer2);

  teamMember = new TeamMember();

  @Input() dialogEvent!: DialogEventInterface;

  @Input() set specificInput(value: [string, CommentInterface] | null) {
    this._specificInput = value;
    if (value) {
      this.dialogDescription = value[1].description;
      // this.editSpecificInput = {
      //   description: value[1].description,
      // };
    }
  }
  get specificInput(): Partial<[string, CommentInterface]> | null {
    return this._specificInput;
  }

  _specificInput!: Partial<[string, CommentInterface]> | null;
  //editSpecificInput: Partial<CommentInterface> = {};

  @Output() emitDialogEvent = new EventEmitter<DialogActionInterface>();

  dialogDescription?: string;

  dialogAction(action: string | boolean) {
    this.emitDialogEvent.emit({
      action: action,
      description: this.dialogDescription ? this.dialogDescription : '',
    });
  }

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'overflow');
  }
}
