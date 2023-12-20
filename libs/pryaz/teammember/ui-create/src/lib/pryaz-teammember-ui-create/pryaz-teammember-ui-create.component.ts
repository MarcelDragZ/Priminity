import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegCodeInterface } from '@priminity/shared/environments/classes';

@Component({
  selector: 'priminity-pryaz-teammember-ui-create',
  standalone: true,
  imports: [CommonModule],
  template: ` <table class="w-full text-white ">
    <tr
      class="bg-neutral-900 h-10 border-b-userColor border-opacity-30 border-b-2"
    >
      <td class="pl-5">Nr.</td>
      <td class="hidden sm:table-cell">Position</td>
      <td>Reg-Code</td>
      <td class="w-28 pr-5">test</td>
    </tr>
    <ng-container *ngFor="let regCode of regCodeList; let i = index">
      <tr
        class="h-9 border-b-neutral-900 border-b-2 border-opacity-80 hover:bg-neutral-900 transition-all"
      >
        <td class="pl-5">{{ i + 1 }}</td>
        <td class="hidden sm:table-cell">{{ regCode[1].position }}</td>
        <td>{{ regCode[1].key }}</td>
        <td class="w-28 pr-5">
          <button
            (click)="deleteRegCode(regCode[0])"
            class="bg-userColor p-0.5 rounded"
          >
            Löschen
          </button>
        </td>
      </tr>
    </ng-container>
  </table>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazTeammemberUiCreateComponent {
  @Input() regCodeList!: [string, RegCodeInterface][] | null;
  @Output() regCodeDelete = new EventEmitter<string>();

  deleteRegCode(key: string) {
    this.regCodeDelete.emit(key);
  }
}
