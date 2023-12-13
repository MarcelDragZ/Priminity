import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuillConfigModule, QuillModule } from 'ngx-quill';

@Component({
  selector: 'priminity-pryaz-shared-quill-text',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule, QuillConfigModule],
  template: `
    <quill-editor
      class="w-full"
      [(ngModel)]="editText"
      [modules]="editorConfig"
      (ngModelChange)="emitValue()"
    />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PryazSharedQuillTextComponent {
  @Input() set text(value: string | null | undefined) {
    this._text = value;
    this.editText = value;
    if (value) {
      this.editText = value;
    }
  }
  get specificTask(): string | null | undefined {
    return this._text;
  }

  @Output() textField = new EventEmitter<string>();

  _text!: string | null | undefined;
  editText: string | null | undefined = '';

  editorConfig = {
    toolbar: [
      [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image' /* , "video" */],
    ],
  };

  emitValue() {
    this.textField.emit(this.editText as string);
  }
}
