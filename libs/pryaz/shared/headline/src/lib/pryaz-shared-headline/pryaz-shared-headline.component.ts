import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'priminity-pryaz-shared-headline',
  standalone: true,
  imports: [CommonModule],
  template: `<h1
    class="p-5 pt-10
   text-userColor text-2xl"
  >
    {{ title }}
  </h1>`,
  styles: [],
})
export class PryazSharedHeadlineComponent {
  @Input() title!: string | null | undefined;
}
